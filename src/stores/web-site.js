import { defineStore } from 'pinia'

export const useWebSiteStore = defineStore('webSite', {
  state: () => ({
    // counter: 0,
    locale: 'es',
    topNavLinkItems: [],
    footerNavLinkItems: [],
    supportedLocales: [],
  }),

  getters: {
    // doubleCount(state) {
    //   return state.counter * 2
    // }
  },

  actions: {
    // increment() {
    //   this.counter++
    // },
    setTopNav(publicLocale, topNavLinks) {
      const topNavLinkItems = this.calcNavItems(publicLocale, topNavLinks)
      this.topNavLinkItems = topNavLinkItems //loSortBy(footerNavLinkItems, 'sortOrder')
    },
    setFooterNav(publicLocale, footerNavLinks) {
      const footerNavLinkItems = this.calcNavItems(publicLocale, footerNavLinks)
      this.footerNavLinkItems = footerNavLinkItems //loSortBy(footerNavLinkItems, 'sortOrder')
    },
    calcNavItems(publicLocale, navLinks) {
      const navLinkItems = []
      navLinks.forEach((navLink) => {
        // sortOrder,
        //   slug,
        //   linkUrl,
        //   linkPath,
        //   linkPathParams,
        // Have to create a new item below as navLink that is passed in is readonly
        const linkWithRoute = {
          linkTitle: navLink.linkTitle
        }
        if (navLink.linkPath === 'admin_with_locale_path') {
          return
        }
        if (navLink.linkPath === 'buy_path') {
          linkWithRoute.route = {
            name: 'rForSaleSearch',
            params: {
              publicLocale
            }
          }
        } else if (navLink.linkPath === 'rent_path') {
          linkWithRoute.route = {
            name: 'rForRentSearch',
            params: {
              publicLocale
            }
          }
        } else if (navLink.linkPath === 'contact_us_path') {
          linkWithRoute.route = {
            name: 'rContactUs',
            params: {
              publicLocale
            }
          }
        } else if (navLink.linkPath === 'show_page_path') {
          if (navLink.linkPathParams === 'sell') {
            linkWithRoute.route = {
              name: 'rSellPage',
              params: {
                publicLocale
              }
            }
          } else if (navLink.linkPathParams === 'about-us') {
            linkWithRoute.route = {
              name: 'rLocaleAboutUsPage',
              params: {
                publicLocale
              }
            }
          } else {
            linkWithRoute.route = {
              name: 'rPublicPage',
              params: {
                publicLocale,
                pageSlug: navLink.linkPathParams,
              }
            }
          }
        } else {
          linkWithRoute.route = {
            name: 'rLocaleHomePage',
            params: {
              pageSlug: navLink.linkPathParams,
              publicLocale
            }
          }
        }
        if (navLink.linkPathParams !== 'sell' && navLink.linkPath !== 'rent_path') {
          // Aug 2022 - temporarily hide rent and sell routes
          navLinkItems.push(linkWithRoute)
        }
      })
      return navLinkItems
    }
  }
})

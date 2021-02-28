import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;

      mainBackground: string;

      components: {
        navbar: {
          brand: {
            color: string;
          };
          link: {
            background: string;
            color: string;
            borderColor: string;
          };
          user: {
            background: string;
            color: string;
            borderColor: string;
          };
        };
        search: {
          offersSearch: {
            background: string;
            borderColor: string;
            topButtonsDiv: {
              borderBottomColor: string;
              button: {
                color: string;
                background: string;
                borderColor: string;
              };
            };
            form: {
              label: {
                color: string;
              };
              selectCryptocurrency: {
                borderColor: string;
                color: string;
              };
              selectDefault: {
                borderColor: string;
                background: string;
                color: string;
                button: {
                  borderColor: string;
                  color: string;
                  background: string;
                };
              };
              info: {
                color: string;
              };
              submitButton: {
                background: string;
                borderColor: string;
                color: string;
              };
            };
          };
          filters: {
            heading: {
              color: string;
            };
            checkbox: {
              borderColor: string;
              background: string;
              checkColor: string;
            };
          };
        };
        offersList: {
          header: {
            color: string;
            background: string;
            borderColor: string;
            sort: {
              color: string;
              background: string;
              borderColor: string;
            };
          };
          list: {
            background: string;
            offer: {
              background: string;
              borderColor: string;
              username: {
                color: string;
                hearts: {
                  color: string;
                  numberColor: string;
                };
                status: {
                  color: {
                    online: string;
                    away: string;
                  };
                  statementColor: string;
                };
              };
              withFor: {
                type: {
                  color: string;
                };
                description: {
                  color: string;
                };
                tag: {
                  color: string;
                  background: string;
                };
              };
              avgSpeed: {
                color: string;
              };
              rate: {
                cryptoPrice: {
                  color: string;
                };
                percent: {
                  color: string;
                  info: {
                    color: string;
                  };
                };
                limit: {
                  color: string;
                };
                button: {
                  color: string;
                  borderColor: string;
                  background: string;
                };
              };
            };
          };
        };
        currentVendorOffers: {
          header: {
            color: string;
            background: string;
            borderColor: string;
            buttons: {
              active: {
                background: string;
                color: string;
              };
              deactive: {
                background: string;
                color: string;
              };
            };
          };
        };
        feedbacks: {
          header: {
            color: string;
            background: string;
            borderColor: string;
            buttons: {
              active: {
                background: string;
                color: string;
              };
              deactive: {
                background: string;
                color: string;
              };
            };
          };
          feedback: {
            username: {
              color: string;
            };
            offerType: {
              color: string;
            };
            message: {
              color: string;
            };
            view: {
              color: string;
            };
            date: {
              color: string;
            };
            feedback: {
              positive: {
                color: string;
              };
              negative: {
                color: string;
              };
            };
          };
        };
      };

      pages: {
        home: {
          hero: {
            color: string;
          };
          findOffer: {
            wrapper: {
              background: string;
              borderColor: string;
            };
            findOfferOffersList: {
              borderColor: string;
              background: string;
            };
          };
          whatYouCanDo: {
            wrapper: {
              background: string;
            };
            headings: {
              h1: {
                color: string;
              };
              h2: {
                color: string;
              };
            };
            tiles: {
              icons: {
                main: {
                  color: string;
                };
                second: {
                  up: {
                    color: string;
                  };
                  down: {
                    color: string;
                  };
                };
              };
              heading: {
                color: string;
              };
              description: {
                color: string;
              };
            };
          };
        };
        vendors: {
          mainSep: {
            borderColor: string;
          };
        };
        vendor: {
          aside: {
            profileImage: {
              borderColor: string;
              background: string;
            };
            information: {
              borderColor: string;
              background: string;
              color: string;
            };
          };
          main: {
            vendorNamesDescription: {
              color: string;
            };
            feedbacks: {
              positive: {
                borderColor: string;
                background: string;
                color: string;
              };
              negative: {
                borderColor: string;
                background: string;
                color: string;
              };
            };
          };
        };
        aboutUs: {
          heading: {
            color: string;
          };
          text: {
            color: string;
          };
          background: string;
        };
      };

      switchers: {
        text: string;
        icon: string;

        background: string;
        border: string;
      };
      a: {
        background: string;
        text: string;
        border: string;
        active: {
          background: string;
          text: string;
        };
        hover: {
          background: string;
          text: string;
        };
      };
      input: {
        color: string;
        borderColor: string;
        background: string;
        focus: {
          borderColor: string;
        };
      };
      button: {
        background: string;
        text: string;
        border: string;
        active: {
          background: string;
          text: string;
        };
        hover: {
          background: string;
          text: string;
        };
      };
    };
  }
}

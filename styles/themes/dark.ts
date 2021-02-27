export default {
  title: 'dark',

  colors: {
    primary: '#232323',
    secondary: '#000',

    background: '#000',
    text: '#fff',

    mainBackground: '#131313',

    components: {
      navbar: {
        brand: {
          color: '#fff'
        },
        link: {
          background: '#545454',
          color: '#fff',
          borderColor: '#545454'
        },
        user: {
          background: '#545454',
          color: '#fff',
          borderColor: '#545454'
        }
      },
      search: {
        offersSearch: {
          background: '#fff',
          borderColor: '#000',
          topButtonsDiv: {
            borderBottomColor: '#d3d3d3',
            button: {
              color: '#000',
              background: '#fff',
              borderColor: '#000'
            }
          },
          form: {
            label: {
              color: '#000'
            },
            selectCryptocurrency: {
              borderColor: '#d4d4d4',
              color: '#000'
            },
            selectDefault: {
              borderColor: '#c2c2c2',
              background: '#f2f2f2',
              color: '#6c6c6c',
              button: {
                borderColor: '#a4a4a4',
                color: '#585858',
                background: '#dddddd'
              }
            },
            info: {
              color: '#fff'
            },
            submitButton: {
              background: '#000',
              borderColor: '#000',
              color: '#ffcd2b'
            }
          }
        },
        filters: {
          heading: {
            color: '#fff'
          },
          checkbox: {
            borderColor: '#000',
            background: '#fff',
            checkColor: '#000'
          }
        }
      },
      offersList: {
        header: {
          color: '#000',
          background: '#fff',
          borderColor: '#000',
          sort: {
            color: '#000',
            background: '#fff',
            borderColor: '#000'
          }
        },
        list: {
          background: '#f9f7fb',
          offer: {
            background: '#fff',
            borderColor: '#000',
            username: {
              color: '#0066ff',
              hearts: {
                color: '#1bbb2b',
                numberColor: '#000'
              },
              status: {
                color: {
                  online: '#1bbb2b',
                  away: '#ffd600'
                },
                statementColor: '#000'
              }
            },
            withFor: {
              type: {
                color: '#000'
              },
              description: {
                color: '#616161'
              },
              tag: {
                color: '#595959',
                background: '#e3e3e3'
              }
            },
            avgSpeed: {
              color: '#000'
            },
            rate: {
              cryptoPrice: {
                color: '#000'
              },
              percent: {
                color: '#000',
                info: {
                  color: '#fff'
                }
              },
              limit: {
                color: '#000'
              },
              button: {
                color: '#ffcd2b',
                borderColor: '#000',
                background: '#000'
              }
            }
          }
        }
      },
      currentVendorOffers: {
        header: {
          color: '#000',
          background: '#fff',
          borderColor: '#000',
          buttons: {
            active: {
              background: '#ffcd2b',
              color: '#000'
            },
            deactive: {
              background: '#fff',
              color: '#000'
            }
          }
        }
      },
      feedbacks: {
        header: {
          color: '#000',
          background: '#fff',
          borderColor: '#000',
          buttons: {
            active: {
              background: '#ffcd2b',
              color: '#000'
            },
            deactive: {
              background: '#fff',
              color: '#000'
            }
          }
        },
        feedback: {
          username: {
            color: '#0066ff'
          },
          offerType: {
            color: '#0066ff'
          },
          message: {
            color: '#000'
          },
          view: {
            color: '#0066ff'
          },
          date: {
            color: '#6a6a6a'
          },
          feedback: {
            positive: {
              color: '#1bbb2b'
            },
            negative: {
              color: '#bb1b1b'
            }
          }
        }
      }
    },

    pages: {
      home: {
        hero: {
          color: '#fff'
        },
        findOffer: {
          wrapper: {
            background: '#000',
            borderColor: '#212121'
          },
          findOfferOffersList: {
            background: '#131313',
            borderColor: '#212121'
          }
        },
        whatYouCanDo: {
          wrapper: {
            background: '#232323'
          },
          headings: {
            h1: {
              color: '#000'
            },
            h2: {
              color: '#535353'
            }
          },
          tiles: {
            icons: {
              main: {
                color: '#000'
              },
              second: {
                up: {
                  color: '#1bbb2b'
                },
                down: {
                  color: '#ff0000'
                }
              }
            },
            heading: {
              color: '#fff'
            },
            description: {
              color: '#fff'
            }
          }
        }
      },
      vendors: {
        mainSep: {
          borderColor: '#000'
        }
      },
      vendor: {
        aside: {
          profileImage: {
            borderColor: '#2b2b2b',
            background: '#131313'
          },
          information: {
            borderColor: '#2b2b2b',
            background: '#131313',
            color: '#fff'
          }
        },
        main: {
          vendorNamesDescription: {
            color: '#fff'
          },
          feedbacks: {
            positive: {
              borderColor: 'rgba(27, 187, 43, 0.15)',
              background: 'rgba(27, 187, 43, 0.1)',
              color: '#1bbb2b'
            },
            negative: {
              borderColor: 'rgba(187, 27, 27, 0.15)',
              background: 'rgba(187, 27, 27, 0.1)',
              color: '#bb1b1b'
            }
          }
        }
      }
    },

    switchers: {
      text: '#060606',
      icon: '#060606',

      background: '#545454',
      border: '#060606'
    },
    a: {
      background: '#545454',
      text: '#fff',
      border: '#545454',
      active: {
        background: '#eaeaea',
        text: '#000'
      },
      hover: {
        background: '#eaeaea',
        text: '#000'
      }
    },
    input: {
      color: '#000',
      borderColor: '#000',
      background: '#cacaca',
      focus: {
        borderColor: '#000'
      }
    },
    button: {
      background: '#545454',
      text: '#fff',
      border: '#545454',
      active: {
        background: '#424242',
        text: '#fff'
      },
      hover: {
        background: '#424242',
        text: '#fff'
      }
    }
  }
};

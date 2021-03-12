export default {
  title: 'light',

  colors: {
    primary: '#ffcd2b',
    secondary: '#000',

    background: '#000',
    text: '#000',

    mainBackground: '#fff',

    components: {
      pages: {
        offer: {
          create: {
            paymentMethod: {
              heading: {
                color: '#000'
              },
              chooseCryptocurrency: {
                heading: {
                  color: '#000'
                },
                button: {
                  hover: {
                    borderColor: '#578ffc'
                  },
                  background: '#fff',
                  borderColor: '#c0c0c0',
                  color: '#000'
                }
              }
            }
          }
        }
      },
      navbar: {
        brand: {
          color: '#000'
        },
        link: {
          background: '#ffcd2b',
          color: '#000',
          borderColor: '#000'
        },
        user: {
          background: '#000',
          color: '#ffcd2b',
          borderColor: '#000'
        }
      },
      userModal: {
        background: '#ffcd2b',
        color: '#000',
        borderColor: '#000'
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
              color: '#a2a2a2'
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
            color: '#000'
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
                  color: '#a2a2a2'
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
      },
      progressBar: {
        createOffer: {
          selection: {
            active: {
              borderColor: '#000',
              color: '#578ffc',
              background: '#fff'
            },
            deactivate: {
              borderColor: '#a0a0a0',
              color: '#a0a0a0',
              background: '#fff'
            }
          },
          step: {
            active: {
              color: '#000'
            },
            deactivate: {
              color: '#a0a0a0'
            }
          },
          separator: {
            background: '#d0d0d0'
          }
        }
      }
    },
    pages: {
      home: {
        hero: {
          color: '#000'
        },
        findOffer: {
          wrapper: {
            background: '#f9f7fb',
            borderColor: '#000'
          },
          findOfferOffersList: {
            background: '#fff',
            borderColor: '#000'
          }
        },
        whatYouCanDo: {
          wrapper: {
            background: '#fff'
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
              color: '#000'
            },
            description: {
              color: '#737373'
            }
          }
        }
      },
      vendors: {
        mainSep: {
          borderColor: '#cecece'
        }
      },
      vendor: {
        aside: {
          profileImage: {
            borderColor: '#000',
            background: '#fff'
          },
          information: {
            borderColor: '#000',
            background: '#fff',
            color: '#000'
          }
        },
        main: {
          vendorNamesDescription: {
            color: '#000'
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
      },
      aboutUs: {
        heading: {
          color: '#000'
        },
        text: {
          color: '#000'
        },
        background: '#fff'
      },
      createOffer: {
        heading: {
          color: '#000'
        }
      }
    },

    switchers: {
      text: '#927518',
      icon: '#927518',

      background: '#e0b322',
      border: '#bb961f'
    },
    a: {
      background: '#000',
      text: '#ffcd2b',
      border: '#000',
      active: {
        background: '#ffcd2b',
        text: '#000'
      }
    },
    input: {
      color: '#000',
      borderColor: '#bd9b2e',
      background: '#fff',
      focus: {
        borderColor: '#000'
      }
    },
    button: {
      background: '#000',
      text: '#ffcd2b',
      border: '#000',
      active: {
        background: '#ffcd2b',
        text: '#000'
      }
    }
  }
};

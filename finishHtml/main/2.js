webpackJsonp([2], {
      "+guE": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var a = n("I3G/"),
          s = n.n(a),
          i = n("mtWM"),
          o = n.n(i),
          r = n("oTFi"),
          c = n("abp6"),
          l = n.n(c),
          u = n("Jaym"),
          d = n("Ngrm"),
          m = n("7/oE"),
          f = n("M7Fo");
        e.default = s.a.extend({
          components: {
            VueModal: l.a
          },
          mixins: [Object(m.a)(!1)],
          data: function () {
            return {
              id: null,
              dsc: "",
              name: "",
              sending: !1
            }
          },
          created: function () {},
          methods: {
            showModal: function (t) {
              var e = this;
              this._editingItem = t, this.id = t.book_id, this.dsc = t.dsc || "", this.name = t.manga_name, Object(u.c)(function () {
                return e.$refs.input.focus()
              }, 300)
            },
            closeModal: function () {
              r.a.close()
            },
            modalClosed: function () {
              this.dsc = "", this.id = null, this._editingItem = null
            },
            saveComment: function () {
              var t = this,
                e = {
                  desc: this.dsc,
                  book_id: this.id
                };
              r.a.disabled || this.sending || (r.a.disable(), this.sending = !0, o.a.post("/bookmark/save-desc", e).then(function () {
                t._editingItem.dsc = t.dsc, t.sending = !1, r.a.enable().close(), f.a.emit("resetCacheTime"), d.a.confirm("Сохранено")
              }).catch(function (e) {
                var n = e.response.data.message,
                  a = void 0 === n ? "Произошла ошибка" : n;
                d.a.alert(a), r.a.enable(), t.sending = !1
              }))
            }
          }
        })
      },
      "/8OU": function (t, e) {
        t.exports = {
          render: function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", [t._m(0), t._v(" "), n("div", {
              staticClass: "modal__body"
            }, [n("p", {
              staticClass: "text-center form__field"
            }, [t._v("\n      Вы действительно хотите "), n("b", [t._v("удалить " + t._s(t.mangaIds.length > 1 ? "выбренные" : "выбранный") + " " + t._s(t.mangaIds.length > 1 ? "Тайтлы" : "Тайтл"))]), t._v(" из\n      "), n("b", [t._v(t._s(t.folderName))])]), t._v(" "), n("div", {
              staticClass: "flex justify_between"
            }, [n("button", {
              staticClass: "button button_red",
              class: {
                button_loading: t.loading
              },
              attrs: {
                disabled: t.loading
              },
              on: {
                click: t.destorySelectedManga
              }
            }, [t._v("\n        Да, удалить\n      ")]), t._v(" "), n("button", {
              staticClass: "button button_clean",
              on: {
                click: function (e) {
                  return t.$emit("cancel")
                }
              }
            }, [t._v("\n        Отмена\n      ")])])])])
          },
          staticRenderFns: [function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", {
              staticClass: "modal__header"
            }, [e("div", {
              staticClass: "modal__title text-center"
            }, [this._v("\n      Подтверждение удаления\n    ")])])
          }]
        }
      },
      "08Ot": function (t, e, n) {
        var a = n("VU/8")(n("7JXq"), n("Ed5z"), !1, null, null, null);
        t.exports = a.exports
      },
      "0G4Z": function (t, e, n) {
        var a = n("VU/8")(n("k/bC"), n("AbnJ"), !1, function (t) {
          this.$style = n("fVXy"), n("asIj")
        }, null, null);
        t.exports = a.exports
      },
      "0ZRV": function (t, e) {
        t.exports = {
          render: function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("label", {
              staticClass: "control"
            }, [n("input", {
              staticClass: "control__input",
              attrs: {
                disabled: t.disabled,
                name: t.name,
                type: "radio"
              },
              domProps: {
                value: t.value,
                checked: t.isChecked
              },
              on: {
                change: function (e) {
                  return t.$emit("input", t.value)
                }
              }
            }), t._v(" "), n("span", {
              staticClass: "control__indicator control__indicator_radio",
              class: {
                control__indicator_lg: t.large
              }
            }), t._v(" "), t.$slots.default || t.label ? n("span", {
              staticClass: "control__text"
            }, [t._t("default", [t._v(t._s(t.label))])], 2) : t._e()])
          },
          staticRenderFns: []
        }
      },
      "1H03": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var a = n("I3G/"),
          s = n.n(a),
          i = n("abp6"),
          o = n.n(i),
          r = n("oTFi"),
          c = n("7/oE");
        e.default = s.a.extend({
          components: {
            VueModal: o.a
          },
          mixins: [Object(c.a)()],
          methods: {
            openModal: function (t) {
              r.a.close().show(t)
            },
            showConfirmDelete: function () {
              this.$dialog
            }
          }
        })
      },
      "251C": function (t, e) {
        t.exports = {
          render: function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", {
              staticClass: "bookmark-sidebar"
            }, [n("div", {
              staticClass: "bookmark-sidebar__wrap"
            }, [n("div", {
              staticClass: "bookmark-sidebar__panel bookmark-sidebar__panel_folders"
            }, [n("bookmark-folders-list"), t._v(" "), t.isCurrentUser ? n("div", {
              staticClass: "bookmark-menu__edit flex justify_between align-items_center",
              on: {
                click: function (e) {
                  return t.$emit("edit")
                }
              }
            }, [t._v("\n        Редактировать вкладки\n        "), n("i", {
              staticClass: "fa fa-pencil"
            })]) : t._e()], 1), t._v(" "), n("bookmark-settings")], 1)])
          },
          staticRenderFns: []
        }
      },
      "2Ot3": function (t, e, n) {
        var a = n("VU/8")(n("c746"), n("yDWM"), !1, null, null, null);
        t.exports = a.exports
      },
      "2ROP": function (t, e) {
        t.exports = {
          render: function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", {
              staticClass: "bookmark-grid-item media-card-wrap"
            }, [n("div", {
              staticClass: "media-card",
              style: {
                "background-image": "url(" + t.$url.cover(t.item) + ")"
              }
            }, [n("v-checkbox", {
              staticClass: "bookmark-item__checkbox",
              attrs: {
                model: t.checked,
                value: t.item.manga_id
              },
              on: {
                change: t.change
              }
            }), t._v(" "), t.isNewChapter ? n("div", {
              staticClass: "bookmark-grid-item__chapter-marker"
            }, [t._v("\n      обновлено\n    ")]) : t._e(), t._v(" "), n("div", {
              staticClass: "bookmark-grid-item__buttons media-card__caption"
            }, [t.isCurrentUser ? n("div", {
              staticClass: "bookmark-grid-item__button",
              attrs: {
                "data-tippy-content": "Редактировать",
                "data-edit-item": t.item.book_id,
                "data-disable-mobile-tooltip": ""
              }
            }, [n("i", {
              staticClass: "fa fas fa-ellipsis-h"
            })]) : t._e(), t._v(" "), t.isCurrentUser && t.item.lastBookmark ? n("span", {
              staticClass: "bookmark-grid-item__button",
              attrs: {
                "data-tippy-content": "Продолжить читать",
                "data-continue": t.item.book_id
              }
            }, [n("i", {
              staticClass: "fa fas fa-play-circle"
            })]) : t._e(), t._v(" "), t.item.dsc ? n("div", {
              staticClass: "bookmark-grid-item__button",
              attrs: {
                "data-tippy-content": t.commentText
              }
            }, [n("i", {
              staticClass: "fa fas fa-comment"
            })]) : t._e()])], 1), t._v(" "), n("a", {
              staticClass: "bookmark-grid-item__name line-clamp link-default",
              attrs: {
                href: "/" + t.item.slug
              }
            }, [t._v(t._s(t.item.rus_name || t.item.manga_name))])])
          },
          staticRenderFns: []
        }
      },
      "4Fgk": function (t, e, n) {
        var a = n("/GnY"),
          s = n("gHOb"),
          i = n("bGc4"),
          o = n("JDN0"),
          r = n("GOFJ"),
          c = "[object Map]",
          l = "[object Set]";
        t.exports = function (t) {
          if (null == t) return 0;
          if (i(t)) return o(t) ? r(t) : t.length;
          var e = s(t);
          return e == c || e == l ? t.size : a(t).length
        }
      },
      "6TKe": function (t, e, n) {
        var a = n("VU/8")(n("+guE"), n("Pcfk"), !1, null, null, null);
        t.exports = a.exports
      },
      "6nx9": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
          return u
        });
        var a = n("gAt4"),
          s = n.n(a),
          i = n("6Vnj"),
          o = n.n(i),
          r = n("YoNT"),
          c = n("zzkz"),
          l = Date.now(),
          u = {
            components: {
              VCheckbox: o.a
            },
            props: {
              item: Object,
              isCurrentUser: Boolean,
              settings: Object
            },
            computed: {
              checked: function () {
                return r.a.checked
              },
              isCheck: function () {
                return -1 !== this.checked.indexOf(this.item.manga_id)
              },
              commentText: function () {
                return '<div class="mb-5 text-muted">Комментарий к тайтлу</div> <div class="bookmark-item__comment">'.concat(this.item.dsc, "</div>")
              },
              isNewChapter: function () {
                if (this.item.last_chapter) {
                  var t = this.item.lastBookmark,
                    e = this.item.last_chapter;
                  return (!t || t.number != e.number || t.volume != e.volume) && s()(l, this.item.last_chapter.created_at) < 5
                }
                return !1
              }
            },
            methods: {
              chapterUrl: function (t) {
                return Object(c.a)(this.item.slug, t)
              },
              change: function (t) {
                r.a.checked = t
              }
            }
          }
      },

! function() {
  function e(t, n, r) {
    function o(a, u) {
      if (!n[a]) {
        if (!t[a]) {
          var s = "function" == typeof require && require;
          if (!u && s) return s(a, !0);
          if (i) return i(a, !0);
          var c = new Error("Cannot find module '" + a + "'");
          throw c.code = "MODULE_NOT_FOUND", c
        }
        var f = n[a] = {
          exports: {}
        };
        t[a][0].call(f.exports, function(e) {
          return o(t[a][1][e] || e)
        }, f, f.exports, e, t, n, r)
      }
      return n[a].exports
    }
    for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
    return o
  }
  return e
}()({
  1: [function(e, t, n) {
    "use strict";
    t.exports = e("../../core/index")
  }, {
    "../../core/index": 23
  }],
  2: [function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      i = e("./HError"),
      a = e("./Query"),
      u = e("./utils"),
      s = function() {
        function e() {
          r(this, e), this._initQueryParams()
        }
        return o(e, [{
          key: "_initQueryParams",
          value: function() {
            this._queryObject = {}, this._limit = 20, this._offset = 0, this._orderBy = null, this._keys = null, this._expand = null
          }
        }, {
          key: "setQuery",
          value: function(e) {
            if (!(e instanceof a)) throw new i(605);
            return this._queryObject = u.cloneDeep(e.queryObject), this
          }
        }, {
          key: "select",
          value: function(e) {
            return e instanceof Array ? this._keys = e.join(",") : this._keys = e, this
          }
        }, {
          key: "expand",
          value: function(e) {
            return e instanceof Array ? this._expand = e.join(",") : this._expand = e, this
          }
        }, {
          key: "limit",
          value: function(e) {
            if (!Number.isInteger(e)) throw new i(605);
            return this._limit = e, this
          }
        }, {
          key: "offset",
          value: function(e) {
            if (!Number.isInteger(e)) throw new i(605);
            return this._offset = e, this
          }
        }, {
          key: "orderBy",
          value: function(e) {
            return e instanceof Array ? this._orderBy = e.join(",") : this._orderBy = e, this
          }
        }, {
          key: "_handleAllQueryConditions",
          value: function() {
            var e = {};
            return e.limit = this._limit, e.offset = this._offset, this._orderBy && (e.order_by = this._orderBy), this._keys && (e.keys = this._keys), this._expand && (e.expand = this._expand), e.where = JSON.stringify(this._queryObject), e
          }
        }]), e
      }();
    t.exports = s
  }, {
    "./HError": 9,
    "./Query": 10,
    "./utils": 32
  }],
  3: [function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      i = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = e("./HError"),
      u = e("./GeoPoint"),
      s = e("./GeoPolygon"),
      c = function() {
        function e(t) {
          r(this, e), this._recordID = t, this._record = {}
        }
        return i(e, [{
          key: "set",
          value: function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (1 === t.length) {
              if ("object" !== o(t[0])) throw new a(605);
              var r = t[0],
                i = {};
              Object.keys(t[0]).forEach(function(e) {
                i[e] = r[e] instanceof u || r[e] instanceof s ? r[e].toGeoJSON() : r[e]
              }), this._record = i
            } else {
              if (2 !== t.length) throw new a(605);
              this._record[t[0]] = t[1] instanceof u || t[1] instanceof s ? t[1].toGeoJSON() : t[1]
            }
            return this
          }
        }, {
          key: "incrementBy",
          value: function(e, t) {
            return this._record[e] = {
              $incr_by: t
            }, this
          }
        }, {
          key: "append",
          value: function(e, t) {
            return t instanceof Array || (t = [t]), this._record[e] = {
              $append: t
            }, this
          }
        }, {
          key: "uAppend",
          value: function(e, t) {
            return t instanceof Array || (t = [t]), this._record[e] = {
              $append_unique: t
            }, this
          }
        }, {
          key: "remove",
          value: function(e, t) {
            return t instanceof Array || (t = [t]), this._record[e] = {
              $remove: t
            }, this
          }
        }, {
          key: "patchObject",
          value: function(e, t) {
            if ("[object Object]" !== Object.prototype.toString.call(t)) throw new a(605);
            return this._record[e] = {
              $update: t
            }, this
          }
        }]), e
      }();
    t.exports = c
  }, {
    "./GeoPoint": 7,
    "./GeoPolygon": 8,
    "./HError": 9
  }],
  4: [function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = e("./baas"),
      s = e("./BaseQuery"),
      c = e("./Query"),
      f = function(e) {
        function t(e) {
          r(this, t);
          var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return n._contentGroupID = e, n
        }
        return i(t, e), a(t, [{
          key: "getContent",
          value: function(e) {
            return u.getContent({
              richTextID: e
            })
          }
        }, {
          key: "find",
          value: function() {
            var e = this._handleAllQueryConditions();
            return e.contentGroupID = this._contentGroupID, this._initQueryParams(), u.getContentList2(e)
          }
        }, {
          key: "getCategoryList",
          value: function() {
            return u.getContentCategoryList({
              contentGroupID: this._contentGroupID,
              limit: 100
            })
          }
        }, {
          key: "getCategory",
          value: function(e) {
            var t = new c;
            return t.compare("group_id", "=", this._contentGroupID), u.getContentCategory({
              categoryID: e,
              where: JSON.stringify(t.queryObject)
            })
          }
        }]), t
      }(s);
    t.exports = f
  }, {
    "./BaseQuery": 2,
    "./Query": 10,
    "./baas": 16
  }],
  5: [function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = e("./baas"),
      s = e("./BaseQuery"),
      c = e("./uploadFile"),
      f = function(e) {
        function t() {
          return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
        }
        return i(t, e), a(t, [{
          key: "upload",
          value: function(e, t) {
            return c(e, t, "json")
          }
        }, {
          key: "delete",
          value: function(e) {
            return e instanceof Array ? u.deleteFiles({
              id__in: e
            }) : u.deleteFile({
              fileID: e
            })
          }
        }, {
          key: "get",
          value: function(e) {
            return u.getFileDetail({
              fileID: e
            })
          }
        }, {
          key: "find",
          value: function() {
            var e = this._handleAllQueryConditions();
            return this._initQueryParams(), u.getFileList(e)
          }
        }]), t
      }(s);
    t.exports = f
  }, {
    "./BaseQuery": 2,
    "./baas": 16,
    "./uploadFile": 31
  }],
  6: [function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = e("./baas"),
      s = e("./BaseQuery"),
      c = e("./Query"),
      f = function(e) {
        function t() {
          return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
        }
        return i(t, e), a(t, [{
          key: "get",
          value: function(e) {
            return u.getFileCategoryDetail({
              categoryID: e
            })
          }
        }, {
          key: "getFileList",
          value: function(e) {
            var t = new c;
            return t.in("category_id", [e]), u.getFileList({
              where: JSON.stringify(t.queryObject)
            })
          }
        }, {
          key: "find",
          value: function() {
            var e = this._handleAllQueryConditions();
            return this._initQueryParams(), u.getFileCategoryList(e)
          }
        }]), t
      }(s);
    t.exports = f
  }, {
    "./BaseQuery": 2,
    "./Query": 10,
    "./baas": 16
  }],
  7: [function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      i = e("./utils"),
      a = function() {
        function e(t, n) {
          r(this, e), this.longitude = t, this.latitude = n, this.geoJSON = {
            type: "Point",
            coordinates: [this.longitude, this.latitude]
          }
        }
        return o(e, [{
          key: "toGeoJSON",
          value: function() {
            return i.cloneDeep(this.geoJSON)
          }
        }]), e
      }();
    t.exports = a
  }, {
    "./utils": 32
  }],
  8: [function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      i = e("./GeoPoint"),
      a = e("./HError"),
      u = e("./utils"),
      s = function() {
        function e(t) {
          if (r(this, e), !(t && t instanceof Array)) throw new a(605);
          if (t.length < 4) throw new a(605);
          this.points = t, this.geoJSON = {
            type: "Polygon",
            coordinates: []
          }
        }
        return o(e, [{
          key: "toGeoJSON",
          value: function() {
            var e = this.geoJSON.coordinates,
              t = [];
            return this.points.forEach(function(e) {
              if (e instanceof i) t.push([e.longitude, e.latitude]);
              else {
                if (!(e instanceof Array && 2 === e.length)) throw new a(605);
                t.push(e)
              }
            }), e.push(t), u.cloneDeep(this.geoJSON)
          }
        }]), e
      }();
    t.exports = s
  }, {
    "./GeoPoint": 7,
    "./HError": 9,
    "./utils": 32
  }],
  9: [function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      i = function() {
        function e(t, n) {
          r(this, e);
          var o = new Error;
          return o.code = t, o.message = n ? t + ": " + n : t + ": " + this.mapErrorMessage(t), o
        }
        return o(e, [{
          key: "mapErrorMessage",
          value: function(e) {
            switch (e) {
              case 600:
                return "network disconnected";
              case 601:
                return "request timeout";
              case 602:
                return "uninitialized";
              case 603:
                return "unauthorized";
              case 604:
                return "session missing";
              case 605:
                return "incorrect parameter type";
              case 607:
                return "payment cancelled";
              case 608:
                return "payment failed";
              case 609:
                return "wxExtend function should be executed to allow plugin use wx.login, wx.getUserInfo, wx.requestPayment";
              default:
                return "unknown error"
            }
          }
        }]), e
      }();
    t.exports = i
  }, {}],
  10: [function(e, t, n) {
    "use strict";

    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = e("./GeoPoint"),
      u = e("./GeoPolygon"),
      s = e("./HError"),
      c = e("./utils"),
      f = function() {
        function e() {
          o(this, e), this.queryObject = {}
        }
        return i(e, [{
          key: "compare",
          value: function(e, t, n) {
            var o = "eq";
            switch (t) {
              case "=":
                o = "eq";
                break;
              case "!=":
                o = "ne";
                break;
              case "<":
                o = "lt";
                break;
              case "<=":
                o = "lte";
                break;
              case ">":
                o = "gt";
                break;
              case ">=":
                o = "gte";
                break;
              default:
                throw new s(605)
            }
            return this._addQueryObject(e, r({}, o, n)), this
          }
        }, {
          key: "contains",
          value: function(e, t) {
            if (t && c.isString(t)) return this._addQueryObject(e, {
              contains: t
            }), this;
            throw new s(605)
          }
        }, {
          key: "matches",
          value: function(e, t) {
            if (t && t instanceof RegExp) {
              var n = c.parseRegExp(t);
              return n.length > 1 ? this._addQueryObject(e, {
                regex: n[0],
                options: n[1]
              }) : this._addQueryObject(e, {
                regex: n[0]
              }), this
            }
            throw new s(605)
          }
        }, {
          key: "in",
          value: function(e, t) {
            if (t && t instanceof Array) return this._addQueryObject(e, { in: t
            }), this;
            throw new s(605)
          }
        }, {
          key: "notIn",
          value: function(e, t) {
            if (t && t instanceof Array) return this._addQueryObject(e, {
              nin: t
            }), this;
            throw new s(605)
          }
        }, {
          key: "arrayContains",
          value: function(e, t) {
            if (t && t instanceof Array) return this._addQueryObject(e, {
              all: t
            }), this;
            throw new s(605)
          }
        }, {
          key: "isNull",
          value: function(e) {
            var t = this;
            return e && e instanceof Array ? e.forEach(function(e) {
              t._addQueryObject(e, {
                isnull: !0
              })
            }) : this._addQueryObject(e, {
              isnull: !0
            }), this
          }
        }, {
          key: "isNotNull",
          value: function(e) {
            var t = this;
            return e && e instanceof Array ? e.forEach(function(e) {
              t._addQueryObject(e, {
                isnull: !1
              })
            }) : this._addQueryObject(e, {
              isnull: !1
            }), this
          }
        }, {
          key: "exists",
          value: function(e) {
            var t = this;
            return e && e instanceof Array ? e.forEach(function(e) {
              t._addQueryObject(e, {
                exists: !0
              })
            }) : this._addQueryObject(e, {
              exists: !0
            }), this
          }
        }, {
          key: "notExists",
          value: function(e) {
            var t = this;
            return e && e instanceof Array ? e.forEach(function(e) {
              t._addQueryObject(e, {
                exists: !1
              })
            }) : this._addQueryObject(e, {
              exists: !1
            }), this
          }
        }, {
          key: "include",
          value: function(e, t) {
            if (t && t instanceof a) return this._addQueryObject(e, {
              intersects: t.toGeoJSON()
            }), this;
            throw new s(605)
          }
        }, {
          key: "within",
          value: function(e, t) {
            if (t && t instanceof u) return this._addQueryObject(e, {
              within: t.toGeoJSON()
            }), this;
            throw new s(605)
          }
        }, {
          key: "withinCircle",
          value: function(e, t, n) {
            if (t && t instanceof a) {
              var r = {
                radius: n,
                coordinates: [t.longitude, t.latitude]
              };
              return this._addQueryObject(e, {
                center: r
              }), this
            }
            throw new s(605)
          }
        }, {
          key: "withinRegion",
          value: function(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            if (t && t instanceof a) {
              var o = {
                geometry: t.toGeoJSON(),
                min_distance: r
              };
              return n && (o.max_distance = n), this._addQueryObject(e, {
                nearsphere: o
              }), this
            }
            throw new s(605)
          }
        }, {
          key: "hasKey",
          value: function(e, t) {
            if ("string" != typeof e || "string" != typeof t) throw s(605);
            return this._addQueryObject(e, {
              has_key: t
            }), this
          }
        }, {
          key: "_setQueryObject",
          value: function(e) {
            this.queryObject = e
          }
        }, {
          key: "_addQueryObject",
          value: function(e, t) {
            if (t.constructor !== Object) throw new s(605);
            var n = r({}, e, {});
            Object.keys(t).forEach(function(r) {
              n[e]["$" + r] = t[r]
            }), this.queryObject.$and || (this.queryObject.$and = []), this.queryObject.$and.push(n)
          }
        }], [{
          key: "and",
          value: function() {
            for (var t = new e, n = {
                $and: []
              }, r = arguments.length, o = Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            return o.forEach(function(e) {
              n.$and.push(e.queryObject)
            }), t._setQueryObject(n), t
          }
        }, {
          key: "or",
          value: function() {
            for (var t = new e, n = {
                $or: []
              }, r = arguments.length, o = Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            return o.forEach(function(e) {
              n.$or.push(e.queryObject)
            }), t._setQueryObject(n), t
          }
        }]), e
      }();
    t.exports = f
  }, {
    "./GeoPoint": 7,
    "./GeoPolygon": 8,
    "./HError": 9,
    "./utils": 32
  }],
  11: [function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r)
        }
        if ("value" in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r)
      },
      s = e("./baas"),
      c = e("./BaseQuery"),
      f = e("./HError"),
      l = e("./Query"),
      h = e("./TableRecord"),
      d = e("./utils"),
      y = function(e) {
        function t(e) {
          r(this, t);
          var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return n._tableID = e, n
        }
        return i(t, e), a(t, [{
          key: "create",
          value: function() {
            return new h(this._tableID)
          }
        }, {
          key: "createMany",
          value: function(e) {
            if (d.isArray(e)) {
              var t = {
                tableID: this._tableID,
                data: e
              };
              return s.createRecordList(t)
            }
            throw new f(605)
          }
        }, {
          key: "delete",
          value: function(e) {
            if (d.isString(e) || Number.isInteger(e)) return s.deleteRecord({
              tableID: this._tableID,
              recordID: e
            });
            if (e instanceof l) {
              var t = {
                tableID: this._tableID,
                limit: this._limit,
                offset: this._offset,
                where: JSON.stringify(e.queryObject)
              };
              return this._initQueryParams(), s.deleteRecordList(t)
            }
            throw new f(605)
          }
        }, {
          key: "getWithoutData",
          value: function(e) {
            if (d.isString(e) || Number.isInteger(e)) return new h(this._tableID, e);
            if (e instanceof l) {
              var t = {};
              return t.limit = this._limit, t.offset = this._offset, t.where = d.cloneDeep(e.queryObject), this._initQueryParams(), new h(this._tableID, null, t)
            }
            throw new f(605)
          }
        }, {
          key: "get",
          value: function(e) {
            var t = {
              tableID: this._tableID,
              recordID: e
            };
            return this._expand && (t.expand = this._expand), this._keys && (t.keys = this._keys), this._initQueryParams(), s.getRecord(t)
          }
        }, {
          key: "_handleAllQueryConditions",
          value: function() {
            var e = u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_handleAllQueryConditions", this).call(this);
            return e.tableID = this._tableID, e
          }
        }, {
          key: "find",
          value: function() {
            var e = this._handleAllQueryConditions();
            return this._initQueryParams(), s.queryRecordList(e)
          }
        }, {
          key: "count",
          value: function() {
            return this.limit(1).find().then(function(e) {
              return e.data.meta.total_count
            })
          }
        }]), t
      }(c);
    t.exports = y
  }, {
    "./BaseQuery": 2,
    "./HError": 9,
    "./Query": 10,
    "./TableRecord": 12,
    "./baas": 16,
    "./utils": 32
  }],
  12: [function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = e("./baas"),
      s = e("./BaseRecord"),
      c = e("./utils"),
      f = function(e) {
        function t(e, n) {
          var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          r(this, t);
          var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
          return a._tableID = e, a._queryObject = i, a
        }
        return i(t, e), a(t, [{
          key: "save",
          value: function() {
            var e = c.cloneDeep(this._record);
            return this._record = {}, u.createRecord({
              tableID: this._tableID,
              data: e
            })
          }
        }, {
          key: "update",
          value: function() {
            var e = c.cloneDeep(this._record);
            if (this._record = {}, this._recordID) return u.updateRecord({
              tableID: this._tableID,
              recordID: this._recordID,
              data: e
            });
            var t = {
              tableID: this._tableID,
              data: e,
              where: JSON.stringify(this._queryObject.where),
              limit: this._queryObject.limit,
              offset: this._queryObject.offset
            };
            return this._queryObject = {}, u.updateRecordList(t)
          }
        }]), t
      }(s);
    t.exports = f
  }, {
    "./BaseRecord": 3,
    "./baas": 16,
    "./utils": 32
  }],
  13: [function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = e("./baas"),
      s = e("./BaseQuery"),
      c = e("./UserRecord"),
      f = function(e) {
        function t() {
          return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
        }
        return i(t, e), a(t, [{
          key: "get",
          value: function(e) {
            return u.getUserDetail({
              userID: e
            })
          }
        }, {
          key: "getCurrentUserWithoutData",
          value: function() {
            return new c
          }
        }, {
          key: "find",
          value: function() {
            var e = this._handleAllQueryConditions();
            return this._initQueryParams(), u.getUserList(e)
          }
        }]), t
      }(s);
    t.exports = f
  }, {
    "./BaseQuery": 2,
    "./UserRecord": 14,
    "./baas": 16
  }],
  14: [function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = e("./baas"),
      s = e("./BaseRecord"),
      c = e("./utils"),
      f = function(e) {
        function t() {
          return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
        }
        return i(t, e), a(t, [{
          key: "update",
          value: function() {
            var e = c.cloneDeep(this._record);
            return this._record = {}, u.updateUser({
              data: e
            })
          }
        }]), t
      }(s);
    t.exports = f
  }, {
    "./BaseRecord": 3,
    "./baas": 16,
    "./utils": 32
  }],
  15: [function(e, t, n) {
    "use strict";
    var r = e("./baas"),
      o = e("./constants"),
      i = e("./HError"),
      a = e("./request"),
      u = e("./storage"),
      s = e("./utils"),
      c = e("./polyfill"),
      f = r._config.API,
      l = !1,
      h = [],
      d = [],
      y = !1,
      p = [],
      _ = [],
      b = function() {
        return new Promise(function(e, t) {
          c.wxLogin({
            success: function(n) {
              return E(n.code, e, t)
            },
            fail: function() {
              s.wxRequestFail(t)
            }
          })
        })
      },
      E = function(e, t, n) {
        return a({
          url: f.LOGIN,
          method: "POST",
          data: {
            code: e
          }
        }).then(function(e) {
          e.statusCode == o.STATUS_CODE.CREATED ? (u.set(o.STORAGE_KEY.UID, e.data.user_id), u.set(o.STORAGE_KEY.OPENID, e.data.openid || ""), u.set(o.STORAGE_KEY.UNIONID, e.data.unionid || ""), u.set(o.STORAGE_KEY.AUTH_TOKEN, e.data.token), t(e)) : n(new i(e.statusCode, s.extractErrorMsg(e)))
        }, function(e) {
          n(e)
        })
      },
      g = function() {
        return arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] ? v() : u.get(o.STORAGE_KEY.USERINFO) ? new Promise(function(e) {
          e(O())
        }) : l ? new Promise(function(e, t) {
          h.push(e), d.push(t)
        }) : (l = !0, new Promise(function(e, t) {
          h.push(e), d.push(t), v().then(function() {
            return D().then(function() {
              l = !1, w()
            })
          }).catch(function(e) {
            m(), T(e, !0)
          })
        }))
      },
      v = function() {
        return u.get(o.STORAGE_KEY.UID) ? new Promise(function(e) {
          e(O(!1))
        }) : y ? new Promise(function(e, t) {
          p.push(e), _.push(t)
        }) : (y = !0, new Promise(function(e, t) {
          p.push(e), _.push(t), b().then(function() {
            y = !1, w(!1)
          }, function(e) {
            y = !1, T(e, !1)
          })
        }))
      },
      O = function() {
        return arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] ? {
          id: u.get(o.STORAGE_KEY.UID),
          openid: u.get(o.STORAGE_KEY.OPENID),
          unionid: u.get(o.STORAGE_KEY.UNIONID)
        } : u.get(o.STORAGE_KEY.USERINFO)
      },
      w = function() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        setTimeout(function() {
          if (e)
            for (; h.length;) h.shift()(O());
          else
            for (; p.length;) p.shift()(O(!1))
        }, 0)
      },
      T = function(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        setTimeout(function() {
          if (t)
            for (; d.length;) d.shift()(e);
          else
            for (; _.length;) _.shift()(e)
        }, 0)
      },
      m = function() {
        arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] ? y = !1 : l = !1
      },
      I = function() {
        return new Promise(function(e, t) {
          a({
            url: f.LOGOUT,
            method: "POST"
          }).then(function() {
            r.clearSession(), e()
          }, function(e) {
            t(e)
          })
        })
      },
      D = function() {
        return new Promise(function(e, t) {
          c.wxGetUserInfo({
            success: function(n) {
              var r = {
                  rawData: n.rawData,
                  signature: n.signature,
                  encryptedData: n.encryptedData,
                  iv: n.iv
                },
                i = n.userInfo;
              return i.id = u.get(o.STORAGE_KEY.UID), i.openid = u.get(o.STORAGE_KEY.OPENID), i.unionid = u.get(o.STORAGE_KEY.UNIONID), A(r, e, t, i)
            },
            fail: function() {
              t(O(!1))
            }
          })
        })
      },
      S = function(e) {
        if (!e || !e.detail) throw new i(603);
        var t = e.detail;
        return new Promise(function(e, n) {
          return v().then(function() {
            if (!t.userInfo) return n(O(!1));
            var r = {
                rawData: t.rawData,
                signature: t.signature,
                encryptedData: t.encryptedData,
                iv: t.iv
              },
              i = t.userInfo;
            return i.id = u.get(o.STORAGE_KEY.UID), i.openid = u.get(o.STORAGE_KEY.OPENID), i.unionid = u.get(o.STORAGE_KEY.UNIONID), A(r, e, n, i)
          }, function(e) {
            n(e)
          })
        })
      },
      A = function(e, t, n, r) {
        return a({
          url: f.AUTHENTICATE,
          method: "POST",
          data: e
        }).then(function(e) {
          u.set(o.STORAGE_KEY.IS_LOGINED_BAAS, "1"), !r.unionid && e.data.unionid && (r.unionid = e.data.unionid, u.set(o.STORAGE_KEY.UNIONID, r.unionid)), u.set(o.STORAGE_KEY.USERINFO, r), t(O())
        }, function(e) {
          n(e)
        })
      };
    t.exports = {
      auth: b,
      handleUserInfo: S,
      login: g,
      logout: I,
      silentLogin: v
    }
  }, {
    "./HError": 9,
    "./baas": 16,
    "./constants": 21,
    "./polyfill": 27,
    "./request": 28,
    "./storage": 29,
    "./utils": 32
  }],
  16: [function(e, t, n) {
    (function(n) {
      "use strict";
      var r = e("./constants"),
        o = e("./HError"),
        i = e("./storage"),
        a = e("./utils"),
        u = e("./polyfill"),
        s = n.BaaS || {};
      s._config = a.getConfig(), s.init = function(e) {
        if (!a.isString(e)) throw new o(605);
        s._config.CLIENT_ID = e, s._config.API_HOST = u.getAPIHost(e)
      }, s.getAuthToken = function() {
        return i.get(r.STORAGE_KEY.AUTH_TOKEN)
      }, s.isLogined = function() {
        return i.get(r.STORAGE_KEY.IS_LOGINED_BAAS)
      }, s.clearSession = function() {
        i.set(r.STORAGE_KEY.AUTH_TOKEN, ""), i.set(r.STORAGE_KEY.IS_LOGINED_BAAS, ""), i.set(r.STORAGE_KEY.USERINFO, ""), i.set(r.STORAGE_KEY.UID, ""), i.set(r.STORAGE_KEY.OPENID, ""), i.set(r.STORAGE_KEY.UNIONID, "")
      }, t.exports = s
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {
    "./HError": 9,
    "./constants": 21,
    "./polyfill": 27,
    "./storage": 29,
    "./utils": 32
  }],
  17: [function(e, t, n) {
    "use strict";
    var r = e("./auth"),
      o = e("./baas"),
      i = e("./constants"),
      a = e("./HError"),
      u = e("./request"),
      s = e("./utils"),
      c = function(e) {
        var t = arguments;
        e.url, e.method, e.data, e.header, e.dataType;
        return r.silentLogin().then(function() {
          return u.apply(null, t)
        })
      },
      f = function(e) {
        for (var t in e) e.hasOwnProperty(t) && (o[t] = function(t) {
          var n = e[t];
          return function(e) {
            var r = s.cloneDeep(e),
              o = n.method || "GET";
            if (n.defaultParams) {
              var u = s.cloneDeep(n.defaultParams);
              r = s.extend(u, r)
            }
            var f = s.format(n.url, r),
              h = {};
            return r.data ? h = r.data : (h = l(n.url, r), h = s.replaceQueryParams(h)), new Promise(function(e, n) {
              return c({
                url: f,
                method: o,
                data: h
              }).then(function(r) {
                r.statusCode == i.httpMethodCodeMap[o] ? e(r) : "deleteRecordList" === t && r.statusCode == i.httpMethodCodeMap.PUT ? e(r) : n(new a(r.statusCode, s.extractErrorMsg(r)))
              }, function(e) {
                n(e)
              })
            })
          }
        }(t))
      },
      l = function(e, t) {
        return e.replace(/:(\w*)/g, function(e, n) {
          void 0 !== t[n] && delete t[n]
        }), t
      },
      h = function() {
        o._config.METHOD_MAP_LIST.map(function(e) {
          f(e)
        })
      };
    t.exports = {
      baasRequest: c,
      excludeParams: l,
      createRequestMethod: h,
      doCreateRequestMethod: f
    }
  }, {
    "./HError": 9,
    "./auth": 15,
    "./baas": 16,
    "./constants": 21,
    "./request": 28,
    "./utils": 32
  }],
  18: [function(e, t, n) {
    "use strict";
    var r = e("./baas"),
      o = e("./baasRequest").baasRequest,
      i = e("./constants"),
      a = e("./HError"),
      u = e("./utils"),
      s = function(e) {
        return new Promise(function(t, n) {
          wx.uploadFile({
            url: r._config.API_HOST + r._config.API.CENSOR_IMAGE,
            filePath: e,
            name: i.UPLOAD.UPLOAD_FILE_KEY,
            header: {
              Authorization: i.UPLOAD.HEADER_AUTH_VALUE + r.getAuthToken(),
              "X-Hydrogen-Client-Version": r._config.VERSION,
              "X-Hydrogen-Client-Platform": u.getSysPlatform(),
              "X-Hydrogen-Client-ID": r._config.CLIENT_ID,
              "User-Agent": i.UPLOAD.UA
            },
            success: function(e) {
              var r = e.statusCode,
                o = e.data;
              if (parseInt(r) !== i.STATUS_CODE.SUCCESS) return n(e);
              t(JSON.parse(o))
            },
            fail: function() {
              u.wxRequestFail(n)
            }
          })
        })
      },
      c = function(e) {
        if (!e || "string" != typeof e) throw a(605);
        return o({
          url: r._config.API_HOST + r._config.API.CENSOR_MSG,
          method: "POST",
          data: {
            content: e
          }
        })
      };
    t.exports = function(e) {
      e.wxCensorImage = s, e.wxCensorText = c
    }
  }, {
    "./HError": 9,
    "./baas": 16,
    "./baasRequest": 17,
    "./constants": 21,
    "./utils": 32
  }],
  19: [function(e, t, n) {
    "use strict";
    var r = e("./config"),
      o = {
        DEBUG: !0
      };
    t.exports = Object.assign(r, o)
  }, {
    "./config": 20
  }],
  20: [function(e, t, n) {
    "use strict";
    var r = {
        LOGIN: "/hserve/v1.4/session/init/",
        AUTHENTICATE: "/hserve/v1.4/session/authenticate/",
        LOGOUT: "/hserve/v1/session/destroy/",
        PAY: "/hserve/v1/wechat/pay/order/",
        ORDER: "/hserve/v1/wechat/pay/order/:transactionID/",
        UPLOAD: "/hserve/v1/upload/",
        TEMPLATE_MESSAGE: "/hserve/v1/template-message-ticket/",
        DECRYPT: "/hserve/v1/wechat/decrypt/",
        WXACODE: "/hserve/v1.4/miniappcode/",
        CLOUD_FUNCTION: "/hserve/v1/cloud-function/job/",
        USER_DETAIL: "/hserve/v1.3/user/info/:userID/",
        USER_LIST: "/hserve/v1.3/user/info/",
        UPDATE_USER: "/hserve/v1.3/user/info/",
        TABLE_LIST: "/hserve/v1.4/table/",
        TABLE_DETAIL: "/hserve/v1.4/table/:tableID/",
        RECORD_LIST: "/hserve/v1.4/table/:tableID/record/",
        QUERY_RECORD_LIST: "/hserve/v1.5/table/:tableID/record/",
        RECORD_DETAIL: "/hserve/v1.5/table/:tableID/record/:recordID/",
        CREATE_RECORD: "/hserve/v1.4/table/:tableID/record/",
        UPDATE_RECORD: "/hserve/v1.4/table/:tableID/record/:recordID/",
        UPDATE_RECORD_LIST: "/hserve/v1.5/table/:tableID/record/?limit=:limit&offset=:offset&where=:where",
        DELETE_RECORD: "/hserve/v1.4/table/:tableID/record/:recordID/",
        DELETE_RECORD_LIST: "/hserve/v1.5/table/:tableID/record/?limit=:limit&offset=:offset&where=:where",
        LAGECY_CONTENT_LIST: "/hserve/v1/content/detail/",
        CONTENT_LIST: "/hserve/v1.3/content/detail/",
        CONTENT_GROUP_LIST: "/hserve/v1/content/group/",
        CONTENT_DETAIL: "/hserve/v1.3/content/detail/:richTextID/",
        CONTENT_GROUP_DETAIL: "/hserve/v1/content/category/",
        CONTENT_CATEGORY_LIST: "/hserve/v1/content/category/",
        CONTENT_CATEGORY_DETAIL: "/hserve/v1/content/category/:categoryID/",
        FILE_DETAIL: "/hserve/v1.3/uploaded-file/:fileID/",
        FILE_LIST: "/hserve/v1.3/uploaded-file/",
        DELETE_FILE: "/hserve/v1.3/uploaded-file/:fileID/",
        DELETE_FILES: "/hserve/v1.3/uploaded-file/",
        FILE_CATEGORY_DETAIL: "/hserve/v1.3/file-category/:categoryID/",
        FILE_CATEGORY_LIST: "/hserve/v1.3/file-category/",
        CENSOR_IMAGE: "/hserve/v1.7/censor-image/",
        CENSOR_MSG: "/hserve/v1.7/censor-msg/"
      },
      o = [{
        getUserInfo: {
          url: r.USER_DETAIL,
          defaultParams: {
            userID: ""
          }
        },
        getUserDetail: {
          url: r.USER_DETAIL
        },
        getUserList: {
          url: r.USER_LIST
        },
        updateUser: {
          url: r.UPDATE_USER,
          method: "PUT"
        }
      }, {
        getTableList: {
          url: r.TABLE_LIST
        },
        getTable: {
          url: r.TABLE_DETAIL
        },
        getRecordList: {
          url: r.RECORD_LIST
        },
        queryRecordList: {
          url: r.QUERY_RECORD_LIST
        },
        getRecord: {
          url: r.RECORD_DETAIL
        },
        createRecord: {
          url: r.CREATE_RECORD,
          method: "POST"
        },
        createRecordList: {
          url: r.QUERY_RECORD_LIST,
          method: "POST"
        },
        updateRecord: {
          url: r.UPDATE_RECORD,
          method: "PUT"
        },
        updateRecordList: {
          url: r.UPDATE_RECORD_LIST,
          method: "PUT"
        },
        deleteRecord: {
          url: r.DELETE_RECORD,
          method: "DELETE"
        },
        deleteRecordList: {
          url: r.DELETE_RECORD_LIST,
          method: "DELETE"
        }
      }, {
        getContentList: {
          url: r.LAGECY_CONTENT_LIST
        },
        getContentList2: {
          url: r.CONTENT_LIST
        },
        getContent: {
          url: r.CONTENT_DETAIL
        },
        getContentGroupList: {
          url: r.CONTENT_GROUP_LIST
        },
        getContentGroup: {
          url: r.CONTENT_GROUP_DETAIL
        },
        getContentCategoryList: {
          url: r.CONTENT_CATEGORY_LIST
        },
        getContentCategory: {
          url: r.CONTENT_CATEGORY_DETAIL
        }
      }, {
        getFileDetail: {
          url: r.FILE_DETAIL
        },
        getFileList: {
          url: r.FILE_LIST
        },
        deleteFile: {
          url: r.DELETE_FILE,
          method: "DELETE"
        },
        deleteFiles: {
          url: r.DELETE_FILES,
          method: "DELETE"
        },
        getFileCategoryDetail: {
          url: r.FILE_CATEGORY_DETAIL
        },
        getFileCategoryList: {
          url: r.FILE_CATEGORY_LIST
        }
      }],
      i = {
        max: 100
      },
      a = {
        contentGroupID: "content_group_id",
        categoryID: "category_id",
        recordID: "id",
        submissionType: "submission_type",
        submissionValue: "submission_value",
        categoryName: "category_name"
      };
    t.exports = {
      API_HOST: "https://api.xiaoapp.io",
      API: r,
      AUTH_PREFIX: "Hydrogen-r1",
      METHOD_MAP_LIST: o,
      DEBUG: !1,
      RANDOM_OPTION: i,
      REQUEST_PARAMS_MAP: a,
      VERSION: "v1.7.0"
    }
  }, {}],
  21: [function(e, t, n) {
    "use strict";
    t.exports = {
      STORAGE_KEY: {
        AUTH_TOKEN: "auth_token",
        USERINFO: "userinfo",
        UID: "uid",
        OPENID: "openid",
        UNIONID: "unionid",
        IS_LOGINED_BAAS: "is_logined_baas"
      },
      STATUS_CODE: {
        CREATED: 201,
        SUCCESS: 200,
        UPDATE: 200,
        PATCH: 200,
        DELETE: 204,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404,
        SERVER_ERROR: 500
      },
      UPLOAD: {
        UPLOAD_FILE_KEY: "file",
        HEADER_AUTH: "Authorization",
        HEADER_CLIENT: "X-Hydrogen-Client-ID",
        HEADER_AUTH_VALUE: "Hydrogen-r1 ",
        UA: "Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
      },
      httpMethodCodeMap: {
        GET: 200,
        POST: 201,
        PUT: 200,
        PATCH: 200,
        DELETE: 204
      }
    }
  }, {}],
  22: [function(e, t, n) {
    "use strict";
    var r = e("./baas"),
      o = e("./baasRequest").baasRequest,
      i = e("./HError"),
      a = e("./utils"),
      u = r._config.API,
      s = function(e, t, n, r) {
        var o = ["wxacode", "wxacodeunlimit", "wxaqrcode"],
          u = ["miniapp_permanent", "miniapp_temporary", "miniapp_qr"],
          s = {},
          c = o.indexOf(e);
        if (!a.isString(e) || -1 === c) throw new i(605, 'type 为字符串类型且只接受 "wxacode", "wxacodeunlimit", "wxaqrcode" 其中一种');
        if (s.code_type = u[c], !t || t.constructor !== Object) throw new i(605, "params 为 Object 类型");
        if ("wxacode" === e || "wxaqrcode" === e) {
          if (!t.hasOwnProperty("path")) throw new i(605, '当 type 为 "wxacode" 或 "wxaqrcode" 时，params 中必须带有 "path" 属性');
          s.path = t.path
        }
        if ("wxacodeunlimit" === e) {
          if (!t.hasOwnProperty("scene")) throw new i(605, '当 type 为 "wxacodeunlimit" 时，params 中必须带有 "scene" 属性');
          s.scene = t.scene, t.hasOwnProperty("page") && (s.path = t.page)
        }
        return s.options = {}, t.hasOwnProperty("width") && (s.options.width = t.width), t.hasOwnProperty("auto_color") && (s.options.auto_color = t.auto_color), t.hasOwnProperty("line_color") && (s.options.line_color = t.line_color), t.hasOwnProperty("is_hyaline") && (s.options.is_hyaline = t.is_hyaline), !0 === n && (s.upload_to_cdn = !0, r && (s.category_name = r)), s
      },
      c = function(e, t, n, r) {
        var a = s(e, t, n, r);
        return new Promise(function(e, t) {
          o({
            url: u.WXACODE,
            method: "POST",
            data: a
          }).then(function(n) {
            return 400 === n.statusCode ? t(new i(400, n.data.message)) : e(n.data)
          }, function(e) {
            t(e)
          })
        })
      };
    t.exports = c
  }, {
    "./HError": 9,
    "./baas": 16,
    "./baasRequest": 17,
    "./utils": 32
  }],
  23: [function(e, t, n) {
    "use strict";
    var r = e("./baas");
    r.auth = e("./baasRequest").auth, r.ContentGroup = e("./ContentGroup"), r.File = e("./File"), r.FileCategory = e("./FileCategory"), r.GeoPoint = e("./GeoPoint"), r.GeoPolygon = e("./GeoPolygon"), r.getWXACode = e("./getWXACode"), r.handleUserInfo = e("./auth").handleUserInfo, r.invokeFunction = e("./invokeFunction"), r.login = e("./auth").login, r.logout = e("./auth").logout, r.order = e("./order"), r.pay = e("./pay"), r.Query = e("./Query"), r.request = e("./request"), r.storage = e("./storage"), r.TableObject = e("./TableObject"), r.uploadFile = e("./uploadFile"), r.User = e("./User"), r.wxDecryptData = e("./wxDecryptData"), r.wxReportTicket = e("./templateMessage").wxReportTicket, e("./censor")(r), e("./baasRequest").createRequestMethod(), "undefined" != typeof wx && (wx.BaaS = r), t.exports = r
  }, {
    "./ContentGroup": 4,
    "./File": 5,
    "./FileCategory": 6,
    "./GeoPoint": 7,
    "./GeoPolygon": 8,
    "./Query": 10,
    "./TableObject": 11,
    "./User": 13,
    "./auth": 15,
    "./baas": 16,
    "./baasRequest": 17,
    "./censor": 18,
    "./getWXACode": 22,
    "./invokeFunction": 24,
    "./order": 25,
    "./pay": 26,
    "./request": 28,
    "./storage": 29,
    "./templateMessage": 30,
    "./uploadFile": 31,
    "./wxDecryptData": 33
  }],
  24: [function(e, t, n) {
    "use strict";
    var r = e("./baas"),
      o = e("./baasRequest").baasRequest,
      i = e("./HError"),
      a = r._config.API,
      u = function(e, t) {
        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!e) throw new i(605);
        var r = {
          function_name: e,
          sync: n
        };
        return void 0 !== t && (r.data = t), new Promise(function(e, t) {
          return o({
            url: a.CLOUD_FUNCTION,
            method: "POST",
            data: r
          }).then(function(t) {
            e(t.data)
          }, function(e) {
            t(e)
          })
        })
      };
    t.exports = u
  }, {
    "./HError": 9,
    "./baas": 16,
    "./baasRequest": 17
  }],
  25: [function(e, t, n) {
    "use strict";
    var r = e("./baas"),
      o = e("./baasRequest").baasRequest,
      i = e("./utils"),
      a = r._config.API,
      u = function(e) {
        var t = i.format(a.ORDER, {
          transactionID: e.transactionID
        });
        return o({
          url: t
        })
      };
    t.exports = u
  }, {
    "./baas": 16,
    "./baasRequest": 17,
    "./utils": 32
  }],
  26: [function(e, t, n) {
    "use strict";
    var r = e("./baas"),
      o = e("./baasRequest").baasRequest,
      i = (e("./constants"), e("./HError")),
      a = (e("./storage"), e("./polyfill")),
      u = r._config.API,
      s = {
        merchandiseSchemaID: "merchandise_schema_id",
        merchandiseRecordID: "merchandise_record_id",
        merchandiseSnapshot: "merchandise_snapshot",
        merchandiseDescription: "merchandise_description",
        totalCost: "total_cost"
      },
      c = function(e) {
        var t = {};
        for (var n in e) t[s[n]] = e[n];
        return o({
          url: u.PAY,
          method: "POST",
          data: t
        }).then(function(e) {
          var t = e.data || {};
          return new Promise(function(e, n) {
            a.wxPaymentRequest({
              appId: t.appId,
              timeStamp: t.timeStamp,
              nonceStr: t.nonceStr,
              package: t.package,
              signType: "MD5",
              paySign: t.paySign,
              success: function(n) {
                return n.transaction_no = t.transaction_no, e(n)
              },
              complete: function(e) {
                "requestPayment:fail cancel" == e.errMsg && n(new i(607))
              },
              fail: function(e) {
                n("requestPayment:fail cancel" == e.errMsg ? new i(607) : new i(608, e.errMsg))
              }
            })
          })
        })
      };
    t.exports = c
  }, {
    "./HError": 9,
    "./baas": 16,
    "./baasRequest": 17,
    "./constants": 21,
    "./polyfill": 27,
    "./storage": 29
  }],
  27: [function(e, t, n) {
    "use strict";
    t.exports = {
      wxLogin: function() {
        var e;
        return (e = wx).login.apply(e, arguments)
      },
      wxGetUserInfo: function() {
        var e;
        return (e = wx).getUserInfo.apply(e, arguments)
      },
      wxPaymentRequest: function() {
        var e;
        return (e = wx).requestPayment.apply(e, arguments)
      },
      getAPIHost: function(e) {
        return "https://" + e + ".xiaoapp.io"
      },
      SDK_TYPE: "file"
    }
  }, {}],
  28: [function(e, t, n) {
    "use strict";
    var r = e("./baas"),
      o = e("./constants"),
      i = e("./HError"),
      a = e("./utils"),
      u = e("./polyfill"),
      s = ["X-Hydrogen-Client-ID", "X-Hydrogen-Client-Version", "X-Hydrogen-Client-Platform", "Authorization"],
      c = function(e) {
        var t = {
            "X-Hydrogen-Client-ID": r._config.CLIENT_ID,
            "X-Hydrogen-Client-Version": r._config.VERSION,
            "X-Hydrogen-Client-Platform": a.getSysPlatform(),
            "X-Hydrogen-Client-SDK-Type": u.SDK_TYPE
          },
          n = r.getAuthToken();
        return n && (t.Authorization = r._config.AUTH_PREFIX + " " + n), e && s.map(function(t) {
          e.hasOwnProperty(t) && delete e[t]
        }), a.extend(t, e || {})
      },
      f = function(e) {
        var t = e.url,
          n = e.method,
          u = void 0 === n ? "GET" : n,
          s = e.data,
          f = void 0 === s ? {} : s,
          l = e.header,
          h = void 0 === l ? {} : l,
          d = e.dataType,
          y = void 0 === d ? "json" : d;
        return new Promise(function(e, n) {
          if (!r._config.CLIENT_ID) return n(new i(602));
          var s = c(h);
          /https:\/\//.test(t) || (t = r._config.API_HOST + t), wx.request({
            method: u,
            url: t,
            data: f,
            header: s,
            dataType: y,
            success: function(t) {
              t.statusCode == o.STATUS_CODE.UNAUTHORIZED && r.clearSession(), e(t)
            },
            fail: function() {
              a.wxRequestFail(n)
            }
          }), a.log("Request => " + t)
        })
      };
    t.exports = f
  }, {
    "./HError": 9,
    "./baas": 16,
    "./constants": 21,
    "./polyfill": 27,
    "./utils": 32
  }],
  29: [function(e, t, n) {
    "use strict";
    t.exports = {
      set: function(e, t) {
        wx.setStorageSync("ifx_baas_" + e, t)
      },
      get: function(e) {
        return wx.getStorageSync("ifx_baas_" + e)
      }
    }
  }, {}],
  30: [function(e, t, n) {
    "use strict";

    function r(e) {
      if (!e) throw new a(605);
      var t = {};
      return t.submission_type = "form_id", t.submission_value = e, t
    }
    var o = e("./baas"),
      i = e("./baasRequest").baasRequest,
      a = e("./HError"),
      u = o._config.API,
      s = function(e) {
        var t = r(e);
        return i({
          url: u.TEMPLATE_MESSAGE,
          method: "POST",
          data: t
        })
      };
    t.exports = {
      makeParams: r,
      wxReportTicket: s
    }
  }, {
    "./HError": 9,
    "./baas": 16,
    "./baasRequest": 17
  }],
  31: [function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = e("./baas"),
      i = e("./baasRequest").baasRequest,
      a = e("./constants"),
      u = e("./HError"),
      s = e("./utils"),
      c = function(e, t) {
        return t.filename = e, i({
          url: o._config.API_HOST + o._config.API.UPLOAD,
          method: "POST",
          data: t
        })
      },
      f = function(e, t, n, r) {
        return wx.uploadFile({
          url: e.uploadUrl,
          filePath: e.filePath,
          name: a.UPLOAD.UPLOAD_FILE_KEY,
          formData: {
            authorization: e.authorization,
            policy: e.policy
          },
          header: {
            Authorization: a.UPLOAD.HEADER_AUTH_VALUE + o.getAuthToken(),
            "X-Hydrogen-Client-Version": o._config.VERSION,
            "X-Hydrogen-Client-Platform": s.getSysPlatform(),
            "X-Hydrogen-Client-ID": o._config.CLIENT_ID,
            "User-Agent": a.UPLOAD.UA
          },
          success: function(n) {
            var o = {},
              i = JSON.parse(n.data);
            o.status = "ok", o.path = e.destLink, o.file = {
              id: e.id,
              name: e.fileName,
              created_at: i.time,
              mime_type: i.mimetype,
              cdn_path: i.url,
              size: i.file_size
            }, delete n.data, n.data = r && "json" === r ? o : JSON.stringify(o), t(n)
          },
          fail: function() {
            s.wxRequestFail(n)
          }
        })
      },
      l = function(e, t, n) {
        if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || !e.filePath) throw new u(605);
        if (t) {
          if ("object" !== (void 0 === t ? "undefined" : r(t))) throw new u(605)
        } else t = {};
        return new Promise(function(r, o) {
          var i = s.getFileNameFromPath(e.filePath);
          return c(i, s.replaceQueryParams(t)).then(function(t) {
            var a = {
              id: t.data.id,
              fileName: i,
              policy: t.data.policy,
              authorization: t.data.authorization,
              uploadUrl: t.data.upload_url,
              filePath: e.filePath,
              destLink: t.data.file_link
            };
            return f(a, r, o, n)
          })
        })
      };
    t.exports = l
  }, {
    "./HError": 9,
    "./baas": 16,
    "./baasRequest": 17,
    "./constants": 21,
    "./utils": 32
  }],
  32: [function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = e("./HError"),
      i = void 0;
    try {
      i = e("./../../../core/config.js")
    } catch (t) {
      i = e("./config.dev")
    }
    var a = function() {
        return i
      },
      u = function() {
        var e = "UNKNOWN";
        try {
          e = wx.getSystemInfoSync().platform
        } catch (e) {}
        return e
      },
      s = function(e) {
        "undefined" != typeof BaaS && BaaS.test || !a().DEBUG || console.log("BaaS LOG: " + e)
      },
      c = function(e, t) {
        t = t || {};
        for (var n in t) {
          var r = new RegExp(":" + n, "g");
          e = e.replace(r, t[n])
        }
        return e.replace(/([^:])\/\//g, function(e, t) {
          return t + "/"
        })
      },
      f = function(e) {
        var t = e.lastIndexOf("/");
        return e.slice(t + 1)
      },
      l = function(e) {
        var t = [],
          n = e.toString(),
          r = n.lastIndexOf("/");
        return t.push(n.substring(1, r)), r !== n.length - 1 && t.push(n.substring(r + 1)), t
      },
      h = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = i.REQUEST_PARAMS_MAP,
          n = g({}, e);
        return Object.keys(e).map(function(r) {
          Object.keys(t).map(function(o) {
            if (r.startsWith(o)) {
              var i = r.replace(o, t[o]);
              delete n[r], n[i] = e[r]
            }
          })
        }), n
      },
      d = function(e) {
        wx.getNetworkType({
          success: function(t) {
            e("none" === t.networkType ? new o(600) : new o(601))
          }
        })
      },
      y = function(e) {
        var t = "";
        return 404 === e.statusCode ? t = "not found" : e.data.error_msg ? t = e.data.error_msg : e.data.message && (t = e.data.message), t
      },
      p = function(e) {
        return "[object String]" === Object.prototype.toString.call(e)
      },
      _ = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      },
      b = function(e) {
        var t = void 0 === e ? "undefined" : r(e);
        return null != e && "object" == t
      },
      E = function(e) {
        var t = void 0 === e ? "undefined" : r(e);
        return null != e && "function" == t
      },
      g = function(e, t) {
        return Object.assign(e, t)
      },
      v = function e(t) {
        var n = _(t) ? [] : {};
        for (var o in t) t.hasOwnProperty(o) && (t[o] && "object" === r(t[o]) ? (n[o] = _(t[o]) ? [] : {}, n[o] = e(t[o])) : n[o] = t[o]);
        return n
      };
    t.exports = {
      log: s,
      format: c,
      getConfig: a,
      getSysPlatform: u,
      getFileNameFromPath: f,
      parseRegExp: l,
      replaceQueryParams: h,
      wxRequestFail: d,
      extractErrorMsg: y,
      isArray: _,
      isString: p,
      isObject: b,
      isFunction: E,
      extend: g,
      cloneDeep: v
    }
  }, {
    "./../../../core/config.js": 20,
    "./HError": 9,
    "./config.dev": 19
  }],
  33: [function(e, t, n) {
    "use strict";
    var r = e("./baas"),
      o = e("./baasRequest").baasRequest,
      i = e("./HError"),
      a = r._config.API,
      u = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if (!s(t)) throw new i(605);
        var r = {
          encryptedData: t[0],
          iv: t[1]
        };
        return new Promise(function(e, n) {
          o({
            url: a.DECRYPT + t[2] + "/",
            method: "POST",
            data: r
          }).then(function(t) {
            var r = t.statusCode;
            return 401 === r ? n(new i(401, t.data.message)) : 403 === r ? n(new i(403, "微信解密插件未开启")) : 400 === r ? n(new i(400, t.data.message)) : e(t.data)
          }, function(e) {
            n(e)
          })
        })
      },
      s = function(e) {
        return e instanceof Array && !(e.length < 3) && -1 !== ["we-run-data", "open-gid", "phone-number"].indexOf(e[2])
      };
    t.exports = u
  }, {
    "./HError": 9,
    "./baas": 16,
    "./baasRequest": 17
  }]
}, {}, [1]);
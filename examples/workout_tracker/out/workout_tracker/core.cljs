(ns workout-tracker.core
  (:require [workout-tracker.utils.dom :as dom]
            [workout-tracker.utils.date :as date]
            [hipo.core :as hipo]))

(defn toggle-modal []
  (let [modal (dom/by-selector ".modal")]
    (dom/toggle-class! modal "is-active")))

(def modal-togglers
  [(dom/by-selector ".open-modal")
   (dom/by-selector ".modal-content button.cancel")
   (dom/by-selector ".modal-close")])

(dom/listen-all! modal-togglers :click toggle-modal)

(defn panel-block [text]
  "Returns a panel block representing a workout."
  (hipo/create
   [:a.panel-block {:data-created-at (.now js/Date)}
    [:span.panel-icon
     [:i.fas.fa-book {:aria-hidden "true"}]]
    text]))

(defn submit-workout-handler [evt]
  "Adds the user's workout to the page when they click submit."
  (let [input-el      (dom/by-selector ".modal-content input")
        workout-entry (.-value input-el)
        panel         (dom/by-selector "nav.panel")
        entry         (panel-block workout-entry)
        reset-btn-div (dom/by-selector "div.reset-button")]
    (do (toggle-modal)
        (.preventDefault evt)
        (set! (.-value input-el) "")
        (.insertBefore panel entry reset-btn-div))))

(dom/listen! (dom/by-selector ".modal-content button.submit")
             :click
             submit-workout-handler)

(defn in-timeframe [timespan date-attr element]
  "Determine if `element` is within timeframe.
   Wraps date-filter. `timespan` is the keyword passed to date-filter.
   `date-attr` specifies the attribute containing the Unix timestamp
   on the element to use."
  (let [el-timestamp (js/parseInt (.getAttribute element date-attr))
        _ (prn (str "el-timestamp -> " el-timestamp))]
    (date/date-filter timespan el-timestamp)))

(defn handle-date-filter [evt]
  "Hides or shows workout log when user clicks on panel tabs."
  (let [tab-el        (.-currentTarget evt)
        when-kw       (keyword (.getAttribute tab-el "data-timeframe"))
        workout-els   (dom/by-selector-all "a.panel-block")
        filter-helper (fn [el] (in-timeframe when-kw "data-created-at" el))
        previous-tab  (dom/by-selector ".panel-tabs a.is-active")]
    (do (.preventDefault evt)
        (.remove (.-classList previous-tab) "is-active")
        (.add (.-classList tab-el) "is-active")
        (dom/apply-filter filter-helper workout-els))))

(dom/listen-all! (dom/by-selector-all ".panel-tabs a")
                 :click
                 handle-date-filter)

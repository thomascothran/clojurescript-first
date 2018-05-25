(ns workout-tracker.utils.date)

(def timespans
  "A map with associating timespans to milliseconds"
  (let [day   86400000
        week  (* day 7)
        month (* day 30)]
    {:day day, :week week, :month month}))

(defn date-filter [when-range unix-timestamp]
  "Test whether a `unix-timestamp` is within `when-range`.
   `when-range` is a keyword, such as :today, :yesterday,
   :last-week, or :last-month"
  (let [now (.now js/Date)
        difference (- now unix-timestamp)]
    (case when-range
      :today      (< difference (:day timespans))
      :yesterday  (and (> difference (:day timespans))
                       (< difference (* 2 (:day timespans))))
      :last-week  (< difference (:week timespans))
      :last-month (< difference (:month timespans)))))

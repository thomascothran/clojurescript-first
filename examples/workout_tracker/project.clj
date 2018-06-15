(defproject workout-tracker "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure       "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [hipo                      "0.5.2"]]
  :plugins [[lein-figwheel "0.5.15"]]
  :clean-targets [:target-path "out"]
  :cljsbuild {
               :builds [{:id           "dev"
                         :source-paths ["src"]
                         :figwheel     true
                         :compiler     {:main "workout-tracker.core"}
                         }]
   }
  )


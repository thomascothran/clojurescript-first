(ns hello-world)

(def exclaimer (.querySelector js/document "#exclaim"))
(defn add-exclaimation-mark! [evt]
  "Takes a JavaScript event, `evt` concatenates an '!' to its target element's text node."
  (let [element (.-target evt)
        text    (.-textContent element)]
    (set! (.-textContent element) (str text "!"))))
(.addEventListener exclaimer "click" add-exclaimation-mark!)


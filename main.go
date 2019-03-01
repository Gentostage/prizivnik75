package main

import (
	"fmt"
	"net/http"
)

func main() {

	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

	http.HandleFunc("/index", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "index.html")
	})

	fmt.Println("Server is listening...")
	http.ListenAndServe(":8181", nil)
}

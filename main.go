package main

import (
	"io"
	"net/http"
)

func main() {
	http.Handle("/", fs)
	http.HandleFunc("/about", about)
	http.HandleFunc("/contact", contact)
	http.ListenAndServe(":8080", nil)
}

var fs = http.FileServer(http.FileSystem(http.Dir(".")))

func about(res http.ResponseWriter, req *http.Request) {
	io.WriteString(res, "<h1>About page<h1>")
}

func contact(res http.ResponseWriter, req *http.Request) {
	io.WriteString(res, "<h1>Contact page<h1>")
}

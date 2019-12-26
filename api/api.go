package api

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/katarinamai/golfinho/budget"
)

func budgetHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	switch r.Method {
	case "GET":
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(`{"message": "get called"}`))
	case "POST":
		w.WriteHeader(http.StatusCreated)
		calcBudget(w, r)
	case "PUT":
		w.WriteHeader(http.StatusAccepted)
		w.Write([]byte(`{"message": "put called"}`))
	case "DELETE":
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(`{"message": "delete called"}`))
	default:
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte(`{"message": "not found"}`))
	}
}

func calcBudget(w http.ResponseWriter, r *http.Request) {
	// Declare a new Person struct.
	var p budget.Person

	// Try to decode the request body into the struct. If there is an error,
	// respond to the client with the error message and a 400 status code.
	err := json.NewDecoder(r.Body).Decode(&p)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Do something with the Person struct...
	// fmt.Fprintf(w, "%+v", p)
	log.Println(p.Salary)
	log.Println(p.Reserve)

	budget.Calc(p.Salary, p.Reserve)
}

// Start a api linten and serve
func Start() {
	http.HandleFunc("/budget", budgetHandler)
	log.Fatal(http.ListenAndServe(":3000", nil))
}

package main

import (
	"fmt"
	"log"
	"math"
	"net/http"
	"strconv"
)

// Function to separate the salary
func budget(salary float64, reserve string) (
	string, float64,
	string, float64,
	string, float64,
	string, float64,
	string, float64) {

	// separation salary (percent)
	essencialPerc := 0.55
	retirementPerc := 0.1
	educationPerc := 0.05
	goalPerc := 0.2
	freePerc := 0.1

	// value to separeted salary ($)
	essencialCash := math.Round(salary * essencialPerc)
	retirementCash := math.Round(salary * retirementPerc)
	educationCash := math.Round(salary * educationPerc)
	goalCash := math.Round(salary * goalPerc)
	freeCash := math.Round(salary * freePerc)
	message := ""

	if reserve == "N" {
		reserveTot := salary * 6
		reserveRest := math.Round(reserveTot / goalCash)
		message = "There are: " + strconv.FormatFloat(reserveRest, 'f', -1, 64) + " months away, " + " deposit monthly: "
	} else {
		message = "Use this value for a goal: "
	}

	return "essencial: ", essencialCash,
		"retirement: ", retirementCash,
		"education: ", educationCash,
		"free: ", freeCash,
		message, goalCash
}

// API
func home(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	switch r.Method {
	case "GET":
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(`{"message": "get called"}`))
	case "POST":
		w.WriteHeader(http.StatusCreated)
		w.Write([]byte(`{"message": "post called"}`))
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

func main() {
	//fmt.Println("Olá Mundo!")
	fmt.Println(budget(3500, "N"))
	http.HandleFunc("/", home)
	log.Fatal(http.ListenAndServe(":8080", nil))

}

package main

import (
	"math"
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

/*
func main() {

	//fmt.Println("Olá Mundo!")
	fmt.Println(budget(3500, "N"))
	s := &server{}
	http.Handle("/", s)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
*/

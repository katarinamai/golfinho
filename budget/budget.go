package budget

import (
	"math"
)

// Person ...
type Person struct {
	Salary  float64
	Reserve string
}

// Budget ...
type Budget struct {
	essencial  float64
	retirement float64
	education  float64
	free       float64
}

// Calc Function to separate the salary
func Calc(salary float64, reserve string) Budget {

	var b Budget

	// separation salary (percent)
	essencialPerc := 0.55
	retirementPerc := 0.1
	educationPerc := 0.05
	// goalPerc := 0.2
	freePerc := 0.1

	// value to separeted salary ($)
	essencialCash := math.Round(salary * essencialPerc)
	retirementCash := math.Round(salary * retirementPerc)
	educationCash := math.Round(salary * educationPerc)
	// goalCash := math.Round(salary * goalPerc)
	freeCash := math.Round(salary * freePerc)
	// message := ""

	if reserve == "N" {
		// reserveTot := salary * 6
		// reserveRest := math.Round(reserveTot / goalCash)
		// message = "There are: " + strconv.FormatFloat(reserveRest, 'f', -1, 64) + " months away, " + " deposit monthly: "
	} else {
		// message = "Use this value for a goal: "
	}

	b.education = educationCash
	b.essencial = essencialCash
	b.free = freeCash
	b.retirement = retirementCash

	return b
}

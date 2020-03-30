package budget

import (
	"encoding/json"
	"fmt"
	"log"
	"math"
)

// Person ...
type Person struct {
	Salary  float64
	Reserve bool
}

// Budget ...
type Budget struct {
	Essencial  float64 `json:"essencial"`
	Retirement float64 `json:"retirement"`
	Education  float64 `json:"education"`
	Free       float64 `json:"free"`
}

// Calc Function to separate the salary
func Calc(salary float64, reserve bool) []byte {

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

	if reserve == false {
		// reserveTot := salary * 6
		// reserveRest := math.Round(reserveTot / goalCash)
		// message = "There are: " + strconv.FormatFloat(reserveRest, 'f', -1, 64) + " months away, " + " deposit monthly: "
	} else {
		// message = "Use this value for a goal: "
	}

	b.Education = educationCash
	b.Essencial = essencialCash
	b.Free = freeCash
	b.Retirement = retirementCash

	j, err := json.Marshal(b)
	if err != nil {
		log.Println(err.Error())
	}
	fmt.Println(string(j))

	return j
}

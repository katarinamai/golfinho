package main

import "testing"

func TestMain_go_1(t *testing.T) {
	budget(0)
}

func TestMain_go_2(t *testing.T) {
	budget(10000000000000000000000000000000000000)
}

func TestMain_go_3(t *testing.T) {
	budget(0.5)
}

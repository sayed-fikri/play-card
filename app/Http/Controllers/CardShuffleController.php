<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CardShuffleController extends Controller
{
    //Redirect to page
    public function index()
    {
        return view('card_shuffle.view');
    }

    // Function to shuffle a deck of cards and distribute them among a specified number of people
    public function shuffleCard(Request $request)
    {

        // Initialize the number of people
        $totalPeople = (int)$request->input('totalPeople');

        // Verify if the data is valid
        if ($totalPeople == '' || !is_numeric($totalPeople) || $totalPeople < 0 || $totalPeople > 53) {
            $data = (object)[
                'status' => "fail",
                'message' => "Invalid value for the number of people!"
            ];

            return $data;
        }

        // Get the array representing a standard deck of cards
        $cards = $this->cardList();

        // Shuffle the deck randomly using Fisher-Yates shuffle algorithm
        for ($i = count($cards) - 1; $i > 0; $i--) {
            $j = rand(0, $i);
            [$cards[$i], $cards[$j]] = [$cards[$j], $cards[$i]];
        }

        // Divide the shuffled cards into chunks for each person
        $cardShuffle = array_chunk($cards, ceil(count($cards) / $totalPeople));

        return $cardShuffle;
    }

// Function to generate an array representing a standard deck of 52 playing cards
    public function cardList()
    {

        $data = array();

        // Define the four card suits with their codes
        $cardGroups = array(
            array("name" => "Spade", "code" => "S"),
            array("name" => "Heart", "code" => "H"),
            array("name" => "Diamond", "code" => "D"),
            array("name" => "Club", "code" => "C"),
        );

        // Generate the cards for each suit and add them to the deck array
        foreach ($cardGroups as $card) {
            $cardCode = $card["code"];
            for ($i = 1; $i <= 13; $i++) {
                // Generate the card name based on the card value
                $cardName = null;
                if ($i == 1) {
                    $cardName = $cardCode . "-A";
                } elseif ($i == 10) {
                    $cardName = $cardCode . "-X";
                } elseif ($i == 11) {
                    $cardName = $cardCode . "-J";
                } elseif ($i == 12) {
                    $cardName = $cardCode . "-Q";
                } elseif ($i == 13) {
                    $cardName = $cardCode . "-K";
                } else {
                    $cardName = $cardCode . "-" . $i;
                }

                // Add the generated card name to the deck array
                array_push($data, $cardName);
            }
        }

        // Return the complete deck of cards
        return $data;
    }

}

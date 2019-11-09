<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Review;
use Validator;

class ReviewsController extends Controller
{
    public $response = [
	    'result' => 'Success'
    ];

    public function index() {
        $reviews = Review::paginate(15);
        return response()->json($reviews, 200);
    }

    public function store(Request $request) {
	    $newReview = Review::create($request->all());
        return response()->json($newReview, 200);
    }

    public function show($id) {
        $review = Review::where('id', $id)->first();
        return response()->json($review, 200);
    }

    public function destroy($id) {
        Review::where('id', $id)->delete();
        return response()->json($this->response, 200);
    }

}

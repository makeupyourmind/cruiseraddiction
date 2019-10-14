<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use File;

class DocumentationController extends Controller
{
    public function index() {
	return File::get(public_path('docs').'/index.html');
    }
}

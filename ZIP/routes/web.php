<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
// use App\Http\Controllers\UploadController;


// Route::post('/upload', [UploadController::class, 'upload']);
use Illuminate\Http\Request;


Route::post('/upload', function (Request $request) {
    // Initialize an array to store the file paths
    $filePaths = [];

    // Loop through each uploaded file
    foreach ($request->file('avatars') as $index => $avatar) {
        // Generate a unique filename for each file
        $filename = uniqid() . '_' . $index . '.' . $avatar->getClientOriginalExtension();

        // Store the file in the storage/app/public directory
        $path = $avatar->storeAs('public', $filename);

        // Alternatively, you can store the file in a specific disk
        // $path = Storage::disk('public')->putFileAs('', $avatar, $filename);

        // Add the file path to the array
        $filePaths[] = $path;
    }

    // Optionally, you can save the file paths to the database or perform any other necessary actions
    // For example:
    // $user = new User();
    // $user->name = $request->input('name');
    // $user->avatars = $filePaths;
    // $user->save();

    // Return a response indicating success
    return response()->json(['message' => 'Files uploaded successfully', 'paths' => $filePaths]);

});





Route::get('/', function () {
    return Inertia::render('HomePage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



Route::get('/ProductDetails', function () {
    return Inertia::render("ProductDetails");
})->middleware('auth')->name('ProductDetails');





require __DIR__.'/auth.php';

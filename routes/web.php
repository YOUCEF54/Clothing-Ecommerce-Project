<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\TemporaryFile;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Support\Facades\Redirect;
// use App\Http\Controllers\UploadController;


// Route::post('/upload', [UploadController::class, 'upload']);

use Illuminate\Http\Request;


// Route::post('/Drag', function (Request $request) {
//     // Initialize an array to store the file paths
//     $filePaths = [];

//     // Validate the uploaded files
//     $request->validate([
//         'avatars.*' => 'required|file|image|max:1024',
//     ]);

//     // Loop through each uploaded file
//     foreach ($request->file('avatars') as $index => $avatar) {
//         // Generate a unique filename for each file
//         $filename = uniqid() . '_' . $index . '.' . $avatar->getClientOriginalExtension();

//         // Store the file in the storage/app/public directory
//         $path = $avatar->storeAs('public', $filename);


//         $filePaths[] = $path;
//     }

//     // $user = new User();
//     // $user->name = $request->input('name');
//     // $user->avatars_paths = $filePaths;
//     // $user->save();

//     // Return a JSON response with file paths
//     return response()->json([
//         'success' => true,
//         'files' => $filePaths,
//     ]);

// });

// Route::post('/Drag', function (Request $request) {
//     // Initialize an array to store the file paths
//     $filePaths = [];
//    // Validate the request data
//     $request->validate([
//         'name' => 'required',
//         'avatars' => 'required|file|image|max:1024',
//     ]);
//     foreach ($request->file('avatars') as $index => $avatar) {

//     // Store the uploaded avatars
//     $filename = uniqid() . '_' . $index . '.' . $avatar->getClientOriginalExtension();
//     // $avatarsPath = $request->file('avatars')->store('public');

//     $path = $avatar->storeAs('public', $filename);
//     // Create a new course instance
//     $course[] = new Course;
//     $course[]->name = $request->name;
//     $course[]->avatars = $path;
//     $filePaths[] = $path;
// }
//     $course->save();

//     return response()->json([
//         'success' => true,
//         'files' => $filePaths,
//     ]);

// });
///////////////////////////////////////////////////////////////////
// Route::post('/dashboard', function (Request $request) {
//         // Initialize an array to store the file paths
//         $filePaths = [];

//         // Validate the request data
//         $request->validate([
//             'avatars' => 'required|array', // Ensure 'avatars' is an array
//             'avatars.*' => 'required|file|image|max:1024', // Validate each file in the array
//         ]);

//         foreach ($request->file('avatars') as $index => $avatar) {
//             // Store the uploaded avatars
//             $filename = uniqid() . '_' . $index . '.' . $avatar->getClientOriginalExtension();
//             $path = $avatar->storeAs('public', $filename);
//             $filePaths[] = $path;
//         }

//         return Inertia::render('/dashboard');
//     });
/////////////////////////////////////////////////////////////////////




Route::post('/dashboard', function (Request $request) {
    // Initialize an array to store the file paths
    $filePaths = [];

    // Validate the request data
    $request->validate([
        'avatars' => 'required|array', // Ensure 'avatars' is an array
        'avatars.*' => 'required|file|image|max:1024', // Validate each file in the array
    ]);

    foreach ($request->file('avatars') as $index => $avatar) {
        // Check if the file name contains "_"
        if (strpos($avatar->getClientOriginalName(), '_') !== false) {
            // Handle edited image (uploaded as a new file)
            // Store the edited image
            $filename = uniqid() . '_' . $index . '.' . $avatar->getClientOriginalExtension();
            $path = $avatar->storeAs('public', $filename);
            $filePaths[] = $path;
        } else {
            // Handle regular file upload
            // Store the uploaded avatars
            $filename = uniqid() . '_' . $index . '.' . $avatar->getClientOriginalExtension();
            $path = $avatar->storeAs('public', $filename);
            $filePaths[] = $path;
        }
    }

    return Inertia::render('/dashboard');
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


Route::get('/ViewAll', function () {
    return Inertia::render("ViewAll");
})->middleware('auth')->name('ViewAll');





require __DIR__.'/auth.php';

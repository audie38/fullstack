<?php

include("./src/config/connection.php");
// READ
$results = query("SELECT * FROM EMPLOYEES");
$isSuccessAdd = false;
$isFailedAdd = false;
$isSuccessEdit = false;
$isFailedEdit = false;

if(isset($_POST["searchButton"])){
    $keyword = $_POST["keyword"];
    $query = "SELECT * FROM EMPLOYEES WHERE EMPLOYEE_NAME LIKE '%$keyword%' OR ADDRESS LIKE '%$keyword%' OR AGE LIKE '%$keyword%'";
    $results = query($query);

    unset($_POST);
}

// CREATE
if(isset($_POST["submitButton"])){
    $employeeName = htmlspecialchars($_POST["employeeName"]);
    $employeeAddress = htmlspecialchars($_POST["employeeAddress"]);
    $employeeAge = htmlspecialchars($_POST["employeeAge"]);
    $employeeGender = htmlspecialchars($_POST["employeeGender"]);
    $queryStmnt = "INSERT INTO EMPLOYEES(EMPLOYEE_NAME, ADDRESS, AGE, GENDER) VALUES('$employeeName', '$employeeAddress', $employeeAge, '$employeeGender')";

    $insertQuery = mysqli_query($conn, $queryStmnt);
    if($insertQuery){
        $isSuccessAdd = true;
    }else{
        $isFailedAdd = true;
    }
    unset($_POST);
}

// UPDATE
if(isset($_POST["submitEditButton"])){
    $id = $_POST["employeeId"];
    $editedName = $_POST["employeeName"];
    $editedAddress = $_POST["employeeAddress"];
    $editedAge = $_POST["employeeAge"];
    $editedGender = $_POST["employeeGender"];

    $query = 
    "UPDATE EMPLOYEES SET EMPLOYEE_NAME = '$editedName', ADDRESS = '$editedAddress', 
    AGE ='$editedAge', GENDER = '$editedGender' WHERE EMPLOYEE_ID = $id";

    $updateQuery = mysqli_query($conn, $query);
    if($updateQuery){
        $isSuccessEdit = true;
    }else{
        $isFailedEdit = true;
    }

    unset($_POST);
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="./public/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
    <title>Employee Management System</title>
  </head>
  <body>

    <!-- Navbar -->
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <span class="navbar-brand mb-0 h1">EmployeeApp</span>
        </div>
    </nav>

    <!-- Search -->
    <div class="container my-5">
        <form action="" method="post">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Employee Search" name="keyword" id="keyword" autocomplete="off">
            <button name="searchButton" class="btn btn-dark" type="submit" id="button-addon2">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        </form>
    </div>

    <!-- Content -->
    <div class="container my-3">
        <?php if($isSuccessAdd): ?>
            <div class='alert alert-success alert-dismissible fade show' role='alert'>
                Add Employee Data Success!
                <button onclick="window.location.href='index.php';" type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'>
                </button>
            </div>
        <?php endif ?>
        <?php if($isFailedAdd): ?>
            <div class='alert alert-danger alert-dismissible fade show' role='alert'>
                Failed to Add Employee Data!
                <button onclick="window.location.href='index.php';" type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'>
                </button>
            </div>
        <?php endif ?>
        <?php if($isSuccessEdit): ?>
            <div class='alert alert-success alert-dismissible fade show' role='alert'>
                Edit Employee Data Success!
                <button onclick="window.location.href='index.php';" type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'>
                </button>
            </div>
        <?php endif ?>
        <?php if($isFailedEdit): ?>
            <div class='alert alert-danger alert-dismissible fade show' role='alert'>
                Failed to Edit Employee Data!
                <button onclick="window.location.href='index.php';" type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'>
                </button>
            </div>
        <?php endif ?>
        <button id="addButton" class="btn btn-dark my-3 d-flex ms-auto" data-bs-toggle="modal" data-bs-target="#employeeModal">
                Add Employee
        </button>

        <table class="table table-responsive table-striped table-hover">
            <tr class="table-dark">
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Action</th>
            </tr>
            <?php $i = 1; ?>
            <?php foreach($results as $res): ?>
            <tr>
                <td hidden><?= $res["EMPLOYEE_ID"] ?></td>
                <td><?= $i ?></td>
                <td><?= $res["EMPLOYEE_NAME"] ?></td>
                <td><?= $res["ADDRESS"] ?></td>
                <td><?= $res["AGE"] ?></td>
                <td><?= $res["GENDER"] ?></td>
                <td>
                    <a name="editButton" class="btn btn-warning editButton"  type="button" data-bs-toggle="modal" data-bs-target="#employeeModal" data-id="<?= $res["EMPLOYEE_ID"] ?>">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </a>
                    <a onclick="return confirm('Delete this Employee ?')" href="deleteEmployee.php?id=<?= $res["EMPLOYEE_ID"]?>" name="deleteButton" class="btn btn-danger">
                        <i class="fa-solid fa-trash"></i>
                    </a>
                </td>
            </tr>
            <?php $i++; ?>
            <?php endforeach ?>
        </table>

    </div>

    <!-- Modal -->
    <div class="modal fade" id="employeeModal" tabindex="-1" aria-labelledby="employeeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="employeeModalLabel">Add Employee</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="" method="post">
                    <input type="hidden" id="employeeIdInput" name="employeeId">
                    <div class="mb-3">
                        <label for="employeeNameInput" class="form-label">Employee Name</label>
                        <input type="text" name="employeeName" class="form-control" id="employeeNameInput" required autofocus>
                    </div>
                    <div class="mb-3">
                        <label for="employeeAddressInput" class="form-label">Employee Address</label>
                        <textarea class="form-control" name="employeeAddress" id="employeeAddressInput" rows="3" required autofocus></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="employeeAgeInput" class="form-label">Employee Age</label>
                        <input type="number" name="employeeAge" min="1" max="80" class="form-control" id="employeeAgeInput" required autofocus>
                    </div>
                    <div class="mb-3">
                        <label for="employeeGenderInput" class="form-label">Employee Gender</label>
                        <select name="employeeGender" id="employeeGenderInput" class="form-select" aria-label="Employee Gender Select" required>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="mb-3 d-flex">
                        <button type="button" class="btn btn-secondary ms-auto mx-1" data-bs-dismiss="modal">Close</button>
                        <button name="submitButton" id="submitButton" type="submit" class="btn btn-primary">Save</button> 
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>

    <script src="./public/js/jquery.min.js"></script>
    <script src="./public/js/bootstrap.bundle.min.js"></script>
    <script src="./public/js/script.js" ></script>
    
  </body>
</html>

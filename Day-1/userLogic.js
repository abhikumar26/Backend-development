import employee from "./data";

const createUser = (req, res) => {
    const { employId, name } = req.body;
    if (!employId || name) {
        res.status(400).json({
            success: false,
            message: "needed emplay Id"
        })
    }

    let user = employee.find((value) => value.employId === empID)
    if (!user) {
        res.json({
            success: "false",
            message: "user dont exist"
        })
    }
    user.name = name;
    res.json({

    })
}

const deleteUser = (req, res) => {
    const { empID } = res.body;
    if (!empID) {
        res.status(400).json({
            success: false,
            message: "needed empID"
        })
    }
    employee = employee.filter((value)=>value.empId != empID)
    res.json({
        success:true,
        message:"user is deleted"
    })
}
export {getuser,deleteUser}
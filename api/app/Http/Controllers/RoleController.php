<?php

namespace App\Http\Controllers;

use App\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $role = Role::all();
        return response()->json($role, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response()->json([], 405);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        Role::create($data);
        return response()->json(['message' => 'Role created successfully'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json([], 405);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json([], 405);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $role = Role::find($id);
        if ($role != null) {
            $role->update($data);
            return response()->json(['message' => 'Role updated successfully'], 204);
        }
        return response()->json(['message' => 'Role does not exists'], 403);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Role::find($id) == null) {
            return response()->json(['message' => 'Role does not exists'], 403);
        }
        $role = Role::has('employees')->get();
        if ($role->find($id) == null) {
            $role = Role::find($id);
            $role->delete();
            return response()->json(['message' => 'Role deleted successfully'], 200);
        }
        return response()->json(['message' => 'Can not delete Role because there are Employees with it'], 403);
    }
}

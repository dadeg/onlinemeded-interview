<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ItemResource;
use App\Http\Resources\ItemsResource;
use App\Item;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ItemsResource(Item::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // not needed here.
        throw new Exception('this is an API, there is nothing to serve from here.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validate the input
        $validatedData = $request->validate(['title' => 'required']);
        
        $item = new Item;
        $item->title = $validatedData['title'];
        $item->completed = 0;
        $item->save();

        ItemResource::withoutWrapping();
        return new ItemResource($item);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $item = Item::find($id);
        ItemResource::withoutWrapping();
        return new ItemResource($item);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // not need here.
        throw new Exception('this is an API, there is nothing to serve from here.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // validate the input
        $validatedData = $request->validate(['title' => 'required', 'completed' => 'integer']);
        
        $item = Item::find($id);
        $item->title = $validatedData['title'];
        $item->completed = $validatedData['completed'];
        $item->save();

        ItemResource::withoutWrapping();
        return new ItemResource($item);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = Item::find($id);
        $item->delete();
    }
}

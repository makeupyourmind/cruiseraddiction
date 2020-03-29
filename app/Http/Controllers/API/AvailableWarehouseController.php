<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Model\AvailableWarehouse;
use Validator;

class AvailableWarehouseController extends BaseController
{
    /**
     * @return \Illuminate\Http\Response
     */
    public function __construct(AvailableWarehouse $available_warehouse)
    {
        $this->available_warehouse = $available_warehouse;
    }

    public function index()
    {
        $data = $this->available_warehouse::paginate(15);
        return $this->sendResponse($data, 'Success');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'warehouse' => 'required|string',
            'isAvailable' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }

        $this->available_warehouse::create($request->all());

        return $this->sendResponse('', 'Created successfully.');
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'warehouse' => 'required|string',
            'isAvailable' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }

        $this->available_warehouse::find($id)->update($request->all());

        return $this->sendResponse('', 'Updated successfully.');
    }

    public function destroy(Request $request)
    {
        $this->available_warehouse::whereIn('id', $request->payload)->delete();

        return $this->sendResponse('Success', 'Available warehouses deleted successfully.');
    }
}

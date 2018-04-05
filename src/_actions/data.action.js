import { dataConstants } from "../_constants";
import { dataService } from "../_services";

export const dataActions = {
    fetchData,
    fetchDataByLocation
};

function fetchData() {
    return dispatch => {
        dataService
            .fetchData()
            .then(data => dispatch(success(data)), error => {
                dispatch(failure(error));
            });
    };

    function success(data) {
        return {type: dataConstants.DATA_SUCCESS, data};
    }
    function failure(error) {
        return {type: dataConstants.DATA_FAILURE, error};
    }
}

function fetchDataByLocation(region) {
    return dispatch => {
        dataService
            .fetchDataByLocation(region)
            .then(data => dispatch(success(data)), error => {
                dispatch(failure(error));
            });
    };

    function success(data) {
        return {type: dataConstants.DATA_SUCCESS, data};
    }
    function failure(error) {
        return {type: dataConstants.DATA_FAILURE, error};
    }
}
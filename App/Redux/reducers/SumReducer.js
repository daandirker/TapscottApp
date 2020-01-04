import {
    FETCH_SUM_DONATION,
    FETCH_SUM_DONATION_SUCCESS,
    FETCH_SUM_DONATION_FAIL,
    FETCH_SUM_PAYMENT,
    FETCH_SUM_PAYMENT_SUCCESS,
    FETCH_SUM_PAYMENT_FAIL,
} from '../actions/ActionTypes'

const initialState = {
    isFetching: false,
    hasFailed: false,
    errorMessage: null,
    data: {},
    totalSum: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_SUM_DONATION:
            return Object.assign({}, state, {
                isFetching: true,
                hasFailed: false,
                errorMessage: null,
                data: null
            })
        case FETCH_SUM_DONATION_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                hasFailed: false,
                errorMessage: null,
                data: action.payload,
                totalSum: action.payload
            })
        case FETCH_SUM_DONATION_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                hasFailed: true,
                errorMessage: action.err,
                data: action.payload
            })
        case FETCH_SUM_PAYMENT:
            return Object.assign({}, state, {
                isFetching: true,
                hasFailed: false,
                errorMessage: null,
                data: null
            })
        case FETCH_SUM_PAYMENT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                hasFailed: false,
                errorMessage: null,
                data: action.payload
            })
        case FETCH_SUM_PAYMENT_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                hasFailed: true,
                errorMessage: action.err,
                data: action.payload
            })
        default:
            return state
    }
}

import {
    SEARCH
} from '../constants/constants';

export function search(value) {
    return {type: SEARCH, value};
}
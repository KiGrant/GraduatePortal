import {
    connect
} from "react-redux";
import ViewProfile from "./ViewProfile";

import {
    fetchAllProfiles
} from "../Search/searchActions";

function mapStateToProps(state) {
    return {
        ...state.Shared,
        isLoading: state.Search.isLoading,
        hasError: state.Search.hasError
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAllProfiles: () => dispatch(fetchAllProfiles())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewProfile);
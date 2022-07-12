import React from "react";

function InfoLoading(Component) {
    return function InfoLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <p>
                loading중..
            </p>
        )
    }
}
export default InfoLoading;
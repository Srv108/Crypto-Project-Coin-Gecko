import { ErrorBoundary } from "react-error-boundary";


function CustomErrorBoundaryUi({ error, resetErrorBoundary }){
    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div role="alert" className="alert alert-error">
                <p>Something went wrong:</p>
                <button onClick={resetErrorBoundary}> Try Again </button>
            </div>
        </div>
            
    );
}

export default function CustomErrorBoundary({children}){
    return(
        <ErrorBoundary
            FallbackComponent={CustomErrorBoundaryUi}
            onReset={() => window.location.reload()}
        >
            {children}
        </ErrorBoundary>
    );
}

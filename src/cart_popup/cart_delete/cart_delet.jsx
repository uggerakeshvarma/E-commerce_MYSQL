export function Cart_Delete({ deletecart, onCancel }) {
    return (
        <>
            <div>
                Do you want to delete this item?
            </div>
            <div className="mt-4">
                <button 
                    className="btn btn-success" 
                    onClick={() => deletecart && deletecart()}
                >
                    Yes
                </button>
                <button 
                    className="btn btn-danger ms-3 " 
                    onClick={onCancel}
                >
                    No
                </button>
            </div>
        </>
    );
}

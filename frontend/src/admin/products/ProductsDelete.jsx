import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { productsDelete } from "../../slices/sliceProducts";

export default function ProductsDelete() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pId } = useParams();
    const { deleteStatus } = useSelector((state) => state.products);

    const handleDelete = async () => {
        dispatch(productsDelete(pId));
        navigate("/admin/products")
    }
    return (
        <div className="flex items-center justify-center">
            <div className="flex w-[400px] h-[250px] bg-gray-200 rounded-lg shadow-md">
                <div className="flex p-4 w-[100%] h-[100%]">
                    <div className="flex flex-col items-center justify-center h-[100%] w-[100%]">
                        <div className="flex w-[100%] h-[50px] justify-center item-center">
                            <h1 className="text-xl font-bold">Yakin Ingin Hapus?</h1>
                        </div>
                        <div className="flex w-[100%] h-[50px]">
                            <button onClick={handleDelete} className="w-[100%] bg-red-700 hover:bg-red-600 active:bg-orange-600 active:scale-95 text-white font-bold px-2 rounded">
                                {deleteStatus === "pending" ? "Submitting" : "Hapus"}
                            </button>
                        </div>
                        <div className="flex w-[100%] h-[50px] mt-[15px]">
                            <button onClick={() => navigate("/admin/products")} className="w-[100%] bg-gray-700 hover:bg-gray-600 active:bg-orange-600 active:scale-95 text-white font-bold px-2 rounded">
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
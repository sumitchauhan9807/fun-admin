import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = (props: any) => {
	const { label, bind, error, onSelectDate, type, maxDate } = props;
	const [startDate, setStartDate] = useState(new Date(maxDate));

	const setDate = (date: any) => {
		setStartDate((prev: any) => {
			return date;
		});
		onSelectDate(date);
	};
	useEffect(() => {
		setDate(maxDate);
	}, []);
	return (
		<>
			<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
				{label}
			</label>
			<div className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${error ? "border-red-500" : ""}`}>
				<ReactDatePicker showYearDropdown={true} maxDate={new Date(maxDate)} selected={startDate} onChange={(date: any) => setDate(date)} />
			</div>
		</>
	);
};

const ButtonSpinner = () => {
	return (
		<svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
			<path
				d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
				fill="#1C64F2"
			/>
		</svg>
	);
};

const Input = (props: any) => {
	const { label, bind, error, disabled, type } = props;
	return (
		<>
			<div className="flex items-center border rounded-md border-slate-400 p-4 mt-4">
				<input {...bind} disabled={disabled} type={type ? type : "text"} placeholder={label} className="outline-none bg-transparent text-xl" />
			</div>
			{error && <p className="text-red-500 text-xs italic mt-2">{error.message}</p>}
		</>
	);
};

const BasicInput = (props: any) => {
	const { label, bind, error, disabled, type } = props;
	return (
		<>
			<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
				{label}
			</label>
			<input {...bind} disabled={disabled} type={type ? type : "text"} placeholder={label} className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${error ? "border-red-500" : ""}`} />
			{error && <p className="text-red-500 text-xs italic">{error.message}</p>}
		</>
	);
};

const Select = (props: any) => {
	const { label, bind, error, values } = props;
	return (
		<>
			<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{label}</label>
			<div className="relative">
				<select {...bind} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
					{values.map((value: any) => {
						return <option value={value}>{value}</option>;
					})}
				</select>
				<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
					<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
					</svg>
				</div>
				{error && <p className="text-red-500 text-xs italic mt-2">{error.message}</p>}
			</div>
		</>
	);
};

const Textarea = (props: any) => {
	const { label, bind, error, disabled } = props;
	return (
		<>
			<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
			<textarea {...bind} rows="4" class={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${error ? "border-red-500" : ""}`} placeholder="Write your thoughts here..."></textarea>
			{error && <p className="text-red-500 text-xs italic mt-2">{error.message}</p>}
		</>
	);
};

const SubmitButton = ({ saving, label }: any) => {
	return (
		<button disabled={saving} type="submit" className="flex justify-center bg-main-pink text-white text-center w-full p-2 mt-6 rounded-full text-lg">
			{saving ? <ButtonSpinner /> : label}
		</button>
	);
};

const FileUpload = ({ upload, maxSize, loading, progress ,text }: { upload: any, maxSize: any, loading: Boolean, progress: Number ,text:any }) => {
	const imageRef: any = useRef(null);
	const inputRef: any = useRef(null);
	const [imagePreviewed, setImagePreviewed] = useState(false);
	const [file, setFile] = useState(null);
  let id = String(new Date().getMilliseconds())
	function readFile(file: any) {
		return new Promise((resolve, reject) => {
			var fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = (e) => {
				resolve(e.target?.result);
			};
		});
	}

	// const upload = (data:any) => {
	//   console.log(data)
	// }

	const getFileData = async (e: any) => {
		setImagePreviewed(true);
		let file = e.target.files[0];
		setFile(file);
		if (file.size / 1024 / 1024 > maxSize) {
			inputRef.current.value = "";
			imageRef.current.src = "";
			setImagePreviewed(false);
			setFile(null);
			return toast.error(`Image should be less than ${maxSize}MB`, {
				position: "top-center",
				autoClose: 1000,
			});
		}
		let readedFile = await readFile(file);
		imageRef.current.src = readedFile;
		setImagePreviewed(true);
	};
	return (
		<>
			{imagePreviewed && <img ref={imageRef} className="" alt="image description" />}
			<div className="px-4 py-6">
				<div id="image-preview" className="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
					<input onChange={(e) => getFileData(e)} ref={inputRef} id={id} type="file" className="hidden" accept="image/*" />
					<label htmlFor={id} className="cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-700 mx-auto mb-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
						</svg>
						<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">{text}</h5>
						<p className="font-normal text-sm text-gray-400 md:px-6">
							Choose photo size should be less than <b className="text-gray-600">{maxSize}mb</b>
						</p>
						<p className="font-normal text-sm text-gray-400 md:px-6">
							and should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.
						</p>
						<span id="filename" className="text-gray-500 bg-gray-200 z-50" />
					</label>
				</div>
				{progress > 0 && (
					<>
						<div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
							<div className="bg-main-pink text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${progress}%` }}>
								<> {progress} % </>
							</div>
						</div>
					</>
				)}
				<div className="flex items-center justify-center">
					<button disabled={loading ? true : false} onClick={(e) => {e.preventDefault(); upload(file)}} className="w-full">
						<label className="flex justify-center bg-main-pink text-white text-center w-full p-2 mt-6  text-lg cursor-pointer">
							<span className="text-center ml-2"> {loading ? <ButtonSpinner /> : text}</span>
						</label>
					</button>
				</div>
			</div>
		</>
	);
};

export { Input, SubmitButton, Select, Textarea, ButtonSpinner, FileUpload, BasicInput, DatePicker };

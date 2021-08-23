export type ToastProps = {
	title: string;
	body: string;
	show: boolean;
	onClose: Function;
	type?: 'success' | 'info' | 'warning' | 'error';
}

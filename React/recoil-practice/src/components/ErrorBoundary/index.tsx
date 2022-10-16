import React, { ReactNode } from "react";

export type ErrorBoundaryProps = {
	children?: ReactNode;
}

class ErrorBoundary extends React.Component {
	state: {hasError: boolean}
	props: ErrorBoundaryProps;

	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error) {
		console.error(error);
	}

	render() {
		if (this.state.hasError) {
			return <h1>error</h1>
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
	

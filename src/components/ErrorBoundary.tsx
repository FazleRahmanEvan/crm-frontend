/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center mt-10 text-red-600">
          Something went wrong.
        </div>
      );
    }
    return this.props.children;
  }
}

enum ErrorSeverity {
  INFO, WARN, ERROR,
}

interface ErrorResource {
 severity: ErrorSeverity;
 message: string;
}

export interface BaseResponse {
  returnMessages?: Map<string, ErrorResource>;
}

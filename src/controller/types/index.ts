/**
 * Basic JSON response for Controller
 */
export type BasicResponse = {
    message: string
}

/**
 * Error response for controller
 */
export type ErrorResponse = {
    error: string,
    message: string
}

export type AuthResponse = {
    message: string,
    token: string
}
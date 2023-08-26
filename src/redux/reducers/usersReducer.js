import { types } from "../types";

const initialState = {
    users: []
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_USERS:
            return { ...state, users: action.payload };

        // Добавляем обработку нового действия для сохранения подробной информации о пользователе
        case types.GET_USER_DETAIL:
            // Находим пользователя, для которого получена подробная информация
            const updatedUsers = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return { ...user, detailInfo: action.payload };
                }
                return user;
            });

            return { ...state, users: updatedUsers };

        default:
            return state;
    }
}

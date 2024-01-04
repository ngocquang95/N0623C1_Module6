// Bước 2: Tạo các action

// constance
const INCREMENT_ACTION = "INCREMENT";
const DECREMENT_ACTION = "DECREMENT";

// action
const increment = (payload) => ({
  type: INCREMENT_ACTION,
  payload,
});

const decrement = (payload) => ({ type: DECREMENT_ACTION, payload });

export { INCREMENT_ACTION, DECREMENT_ACTION, increment, decrement };

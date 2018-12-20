

## Redux-1 : 前端为何需要状态管理库

- Redux让组件通信更加容易

- Redux特性： Single Source of Truth
- Redux特性： 可预测性 state + action = newState
- Redux特性： 纯函数更新Store

```javascript
function todo(state = [], action){
    switch(action.type){
        case 'ADD_TODO':
            return state.concat([{ text: action.text, completed: false }])
        case 'TOGGLE_TODO':
            return state.map(
                (todo, index)=>{
                    action.index === index
                    ? { text: todo.text, completed: !todo.completed }
                    : todo
                }
            )
        default:
            return state
    }
}
```

## Redux-2 : 深入理解Store，Action， Reducer

### 理解store

```javascript
    const store = createStore(reducer)
```

- 1、getState
- 2、dispatch(action)
- 3、subscribe(listen)

### 理解action

```javascript
    const ADD_TODO = 'ADD_TODO'
    {
        type: ADD_TODO,
        text: 'Build my first Redux app'
    }
```

### 理解reducer

```javascript
function todoApp(state = initialState, action){
    switch(action.type){
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        default:
            return state
    }
}
```

### 理解combineReducer


```javascript
export default function todos(state = [], action){
    switch(action.type){
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}

export default function counter(state = [], action){
    switch(action.type){
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}
```


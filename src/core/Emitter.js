export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // Уведомляем слушателей, если они есть
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }

    this.listeners[event].forEach(listener => {
      listener(...args)
    })

    return true
  }

  // Подписываемся на увеломления или добавляем нового слушателя
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
         this.listeners[event].filter(listener => listener !== fn)
    }
  }
}
// Example
// const emitter = new Emitter()
// emitter.subscribe('denis', data => console.log('Sup:', data))
// emitter.emit('denis', 42)

import styles from './styles/Button.module.css';
export const triggerRipple = (
  event: any,
  ripple: boolean,
  buttonRef: any,
  rippleRef: any,
  onMouseDown: any
) => {
  const button = buttonRef.current;
  const rippleSpan = rippleRef.current;
  if (button && rippleSpan && ripple) {
    const buttonArea = button.getBoundingClientRect();
    const { left, top } = buttonArea;
    const leftPosition = event.clientX - left;
    const topPosition = event.clientY - top;
    rippleSpan.style.left = `${leftPosition}px`;
    rippleSpan.style.top = `${topPosition}px`;
    rippleSpan.classList.add(styles.ripple_animation);
    rippleSpan.classList.remove('hidden');
    setTimeout(() => {
      rippleSpan.classList.remove(styles.ripple_animation);
      rippleSpan.classList.add('hidden');
    }, 400);
  }
  if (onMouseDown) {
    onMouseDown(event);
  }
};

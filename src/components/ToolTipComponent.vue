<template>
    <div class="tooltip-container" :style="containerStyle">
      <slot></slot>
      <div v-if="visible" class="tooltip-content" :style="tooltipStyle">
        {{ content }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToolTipComponent',
    props: {
      content: {
        type: String,
        required: true
      },
      position: {
        type: String,
        default: 'top', // 'top', 'right', 'bottom', 'left'
        validator(value) {
          return ['top', 'right', 'bottom', 'left'].includes(value);
        }
      },
      offset: {
        type: Number,
        default: 10 // Distance between tooltip and element
      }
    },
    data() {
      return {
        visible: false
      };
    },
    computed: {
      containerStyle() {
        return {
          position: 'relative',
          display: 'inline-block'
        };
      },
      tooltipStyle() {
        const positionStyles = {
          top: { bottom: `100%`, left: '50%', transform: 'translateX(-50%)' },
          right: { top: '50%', left: '100%', transform: 'translateY(-50%)' },
          bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)' },
          left: { top: '50%', right: '100%', transform: 'translateY(-50%)' }
        };
        return {
          position: 'absolute',
          padding: '0.5rem',
          backgroundColor: '#333',
          color: '#fff',
          borderRadius: '4px',
          whiteSpace: 'nowrap',
          ...positionStyles[this.position],
          margin: `${this.offset}px 0 0 ${this.offset}px`
        };
      }
    },
    methods: {
      showTooltip() {
        this.visible = true;
      },
      hideTooltip() {
        this.visible = false;
      }
    },
    mounted() {
      this.$el.addEventListener('mouseover', this.showTooltip);
      this.$el.addEventListener('mouseleave', this.hideTooltip);
    },
    beforeMounted() {
      this.$el.removeEventListener('mouseover', this.showTooltip);
      this.$el.removeEventListener('mouseleave', this.hideTooltip);
    }
  };
  </script>
  
  <style scoped>
  .tooltip-content {
    visibility: hidden;
  }
  .tooltip-container:hover .tooltip-content {
    visibility: visible;
  }
  </style>
  
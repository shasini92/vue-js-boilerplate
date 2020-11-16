<template>
  <v-modal
    ref="modal"
    :name="modalName"
    :adaptive="true"
    :scrollable="true"
    :classes="getModalStyles()"
    height="auto"
    width="100%"
    @closed="handleClose"
    @before-open="$emit('before-open', $event)"
    :click-to-close="clickToClose"
  >
    <div class="project-c-app-modal">
      <div class="project-c-app-modal__header">
        <h4>
          {{ $t(title) }}
        </h4>
        <slot name="header-actions" />
      </div>
      <div class="project-c-app-modal__body">
        <slot name="body">
          <span class="project-c-modal__text">
            {{ $t(body) }}
          </span>
        </slot>
      </div>
      <slot name="footer">
        <div class="project-c-app-modal__footer" v-if="!hideFooter">
          <slot name="extra"></slot>
          <slot name="cancel" v-if="!okOnly">
            <div class="project-c-app-modal__footer-item">
              <app-button
                variation="danger-light"
                @click="handleCancel"
                size="full"
              >
                {{ $t(cancelTitle) }}
              </app-button>
            </div>
          </slot>
          <slot name="ok">
            <div class="project-c-app-modal__footer-item">
              <app-button
                variation="primary"
                size="full"
                :disabled="okDisabled"
                @click="handleOk"
              >
                {{ $t(okTitle) }}
              </app-button>
            </div>
          </slot>
        </div>
      </slot>
    </div>
  </v-modal>
</template>

<script>
export default {
  name: 'AppModal',

  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },

    clickToClose: {
      type: Boolean,
      required: false,
      default: true
    },

    body: {
      type: String,
      required: false,
      default: ''
    },

    hideFooter: {
      type: Boolean,
      required: false,
      default: false
    },

    okOnly: {
      type: Boolean,
      required: false,
      default: false
    },

    okTitle: {
      type: String,
      required: false,
      default: 'COMMON.PROCEED'
    },

    okDisabled: {
      type: Boolean,
      required: false,
      default: false
    },

    cancelTitle: {
      type: String,
      required: false,
      default: 'COMMON.CANCEL'
    },

    modalName: {
      type: String,
      required: false,
      default: 'modal'
    },

    minWidth: {
      type: Boolean,
      required: false,
      default: false
    },

    customCancelCallback: {
      type: Function,
      required: false
    },

    className: {
      type: String,
      required: false
    }
  },

  mounted () {
    this.$modal.show(this.modalName)
  },

  methods: {
    handleCancel () {
      this.$emit('cancel')
      this.$emit('queue-closed')

      if (this.customCancelCallback) {
        return this.customCancelCallback()
      }

      this.$modal.hide(this.name)
    },

    handleClose () {
      this.$emit('closed')
      this.$emit('queue-closed')
    },

    handleOk () {
      this.$emit('ok')
      this.$emit('queue-closed')
    },

    getModalStyles () {
      let classes = 'project-c-app-modal-wrapper '

      if (this.minWidth) {
        classes += 'project-c-app-modal-wrapper--min-width-23 '
      }

      if (this.maxWidth25) {
        classes += 'project-c-app-modal-wrapper--max-width-25 '
      }

      if (this.className) {
        classes += `${this.className} `
      }

      return classes
    }
  }
}
</script>

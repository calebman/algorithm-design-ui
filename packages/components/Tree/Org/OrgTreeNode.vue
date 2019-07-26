<!--  -->
<template>
  <div :class="['org-tree-node',(collapsable && hasChildren) ? 'collapsed' : 'collapsed-not-child', showChildren ? '' : 'is-leaf']">
    <div class="org-tree-node-label">
      <div class="org-tree-node-label-inner">
        <slot :renderData="data" :parentData="parent" :renderIndex="index"></slot>
      </div>
      <span v-if="collapsable && hasChildren" :class="['org-tree-node-btn', showChildren ? 'expanded' : '']" @click="handleExpand(data)"></span>
    </div>
    <div v-if="showChildren" class="org-tree-node-children">
      <org-tree-node
        v-for="(children, childrenIndex) in childrens"
        :key="childrenIndex"
        :index="childrenIndex"
        :data="children"
        :parent="data"
        :expandAlias="expandAlias"
        :childrenAlias="childrenAlias"
        :horizontal="horizontal"
        :collapsable="collapsable"
        @on-expand="handleExpand(children)">
        <template slot-scope="{ renderData, parentData, renderIndex }">
          <slot :renderData="renderData" :parentData="parentData" :renderIndex="renderIndex"></slot>
        </template>
      </org-tree-node>
    </div>
  </div>

</template>

<script>
export default {
  name: 'OrgTreeNode',
  props: {
    data: {
      type: Object,
      required: true
    },
    parent: {
      type: Object,
      default: () => {
        return null
      }
    },
    expandAlias: {
      type: String,
      default: 'expand'
    },
    childrenAlias: {
      type: String,
      default: 'children'
    },
    horizontal: {
      type: Boolean,
      default: true
    },
    collapsable: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  computed: {
    hasChildren () {
      return this.data && this.data[this.childrenAlias] && this.data[this.childrenAlias].length
    },
    showChildren () {
      return this.hasChildren && ((this.collapsable && this.data[this.expandAlias]) || !this.collapsable)
    },
    childrens () {
      return this.data && this.data[this.childrenAlias]
    }
  },
  methods: {
    handleExpand (data) {
      // 展开或收起子节点
      this.$emit('on-expand', data)
    }
  }
}
</script>

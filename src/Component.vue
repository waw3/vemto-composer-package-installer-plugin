<template>
    <div class="w-full">
        A simple Vemto Plugin base:
        
        <br/>

      <div class="mt-5">
        <h3 class="block font-bold mb-2">Packages</h3>

        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="px-3 py-1 border-none text-left">Name</th>
              <th class="px-3 py-1 text-left">Version</th>
              <th class="px-3 py-1 text-left">Description</th>
              <th class="px-3 py-1 text-left"></th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="(package, index) in pluginData.packages" :key="index">
            <td class="px-3 py-2">
              <span v-model="pluginData.packages[index].name" />
            </td>
            <td class="px-3 py-2">
              <span v-model="pluginData.packages[index].version" />
            </td>
            <td class="px-3 py-2">
              <span v-model="pluginData.packages[index].description" />
            </td>
            <td>
<!--              <button class="button-danger" @click="removeTenant(index)">Remove</button>-->
              <input type="checkbox" :id="pluginData.packages[index].package" :name="pluginData.packages[index].name" :value="index">
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: '',
            pluginData: {},
        }
    },

    created() {
        this.pluginData = window.vemtoApi.getPluginData()
        this.text = this.pluginData.text
    },

    methods: {
        save() {
            window.vemtoApi.savePluginData({
                text: this.text
            })
        }
    }
}
</script>
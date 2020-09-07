
<template>
    <div class="row">
        <div class="col-3">
            <h3>Draggable 1</h3>
            <draggable
                    class="dragArea list-group"
                    :list="list1"
                    :clone="clone"
                    :group="{ name: 'people', pull: pullFunction }"
                    @start="start"
            >
                <div class="list-group-item" v-for="element in list1" :key="element.id">
                    {{ element.name }}
                </div>
            </draggable>
        </div>

        <div class="col-3">
            <h3>Draggable 2</h3>
            <draggable class="dragArea list-group" :list="list2" group="people">
                <div class="list-group-item" v-for="element in list2" :key="element.id">
                    {{ element.name }}
                </div>
            </draggable>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    let idGlobal = 8;
    export default {
        name: "drag_index",
        components: {
            draggable
        },
        data() {
            return {
                list1: [
                    { name: "Jesus", id: 1 },
                    { name: "Paul", id: 2 },
                    { name: "Peter", id: 3 }
                ],
                list2: [
                    { name: "Luc", id: 5 },
                    { name: "Thomas", id: 6 },
                    { name: "John", id: 7 }
                ],
                controlOnStart: true
            };
        },
        methods: {
            clone({ name }) {
                return { name, id: idGlobal++ };
            },
            pullFunction() {
                return this.controlOnStart ? "clone" : true;
            },
            start({ originalEvent }) {
                this.controlOnStart = originalEvent.ctrlKey;
            }
        }
    }
</script>

<style scoped>
    .col-3{
        float: left;
        margin-left: 50px;
    }
    .list-group-item {
        width: 200px;
        margin-bottom: 10px;
        background: #3b8070;
        line-height: 40px;
        color: white;
        list-style-type: none;
        text-align: center;
    }
</style>
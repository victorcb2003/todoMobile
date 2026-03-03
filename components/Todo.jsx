// todo

// Créer un composant TodoList :
// Créez un composant React appelé TodoList qui servira de conteneur principal pour la liste de tâches.

// Gérer l'état des tâches :
// Utilisez le hook useState pour gérer l'état des tâches.
// Créez un tableau d'objets représentant chaque tâche.
// Chaque objet doit avoir des propriétés telles que id, name (nom de la tâche), et completed (état de la tâche).

// Afficher la liste des tâches :
// Utilisez une boucle pour parcourir le tableau de tâches et afficher chaque tâche dans le composant TodoList. Chaque tâche doit être affichée sous la forme d'un élément <li>.

// Ajouter des tâches :
// Créez un formulaire ou une zone de texte permettant à l'utilisateur de saisir le nom d'une nouvelle tâche.
// Créez une fonction pour ajouter une nouvelle tâche au tableau d'objets lorsque le formulaire est soumis.

// Marquer les tâches comme terminées/non terminées :
// Ajoutez des boutons ou des cases à cocher permettant à l'utilisateur de marquer une tâche comme terminée ou non terminée.
// Créez une fonction pour mettre à jour l'état d'une tâche lorsqu'un bouton est cliqué.

// Modifier les noms des tâches :
// Ajoutez des boutons "Modifier" à côté de chaque tâche.
// Créez une fonction pour permettre à l'utilisateur de modifier le nom d'une tâche existante.

// Supprimer des tâches :
// Ajoutez des boutons "Supprimer" à côté de chaque tâche.
// Créez une fonction pour permettre à l'utilisateur de supprimer une tâche existante.

// Interface utilisateur conviviale :
// Appliquez des styles CSS ou utilisez pour rendre l'interface utilisateur conviviale.

// Ajoutez des fonctionnalités supplémentaires telles que le filtrage, le tri ou la gestion des dates d'échéance selon vos besoins.

import { useState, useEffect } from "react"
import { Pressable, Text, TextInput, View, FlatList, TouchableOpacity } from "react-native"
import { style } from "../styles/todo"

export default function Todo() {
    const [todo, setTodo] = useState([])
    const [nom, setNom] = useState("")
    const [count, setCount] = useState(0)
    const [modifyId, setModifyId] = useState(null)
    const [newValues,setNewValue] = useState("")

    function handleSubmit() {
        setTodo([...todo, { nom: nom, done: false, id: count }])
        setCount(count + 1)
        setNom("")
    }

    function handleDone(item) {
        console.log("on handleDone")
        console.log(item)
        const newTodo = [...todo]
        const change = newTodo.find(t => t.id == item.id)
        change.done = !change.done
        console.log(newTodo)
        setTodo(newTodo)

    }

    function handleDelete(item) {
        setTodo(todo.filter(t => t.id != item.id))
    }

    function handleModify(item) {
        setModifyId(item.id)
        setNewValue(item.nom)
    }

    function confirmModify(){
        const newTodo = [...todo]
        const change = newTodo.find(t => t.id == modifyId)
        change.nom = newValues
        setTodo(newTodo)
        setModifyId(null)
        setNewValue("")
    }

    // useEffect(()=>{
    //     console.log(todo)
    // },[todo])

    const renderItems = ({ item }) =>
        <TouchableOpacity style={item.done ? style.true : style.false} onPress={() => handleDone(item)}>
            <>
                {modifyId == item.id ? (
                    <View>
                        <TextInput
                            value={newValues}
                            onChangeText={setNewValue}
                            placeholder='Text'
                        />
                        <Pressable onPress={()=>confirmModify()}>
                            <Text>
                                Confirmer
                            </Text>
                        </Pressable>
                        <Pressable onPress={()=>setModifyId(null)}>
                            <Text>
                                Annuler
                            </Text>
                        </Pressable>
                    </View>
                    
                ) : (
                    <Text>
                        {item.nom}
                    </Text>
                )}

            </>
            <View>
                <Pressable onPress={()=>handleModify(item)}>
                    <Text>
                        Modifier
                    </Text>
                </Pressable>
                <Pressable onPress={() => handleDelete(item)}>
                    <Text>
                        Supprimer
                    </Text>
                </Pressable>
            </View>
        </TouchableOpacity>

    return (
        <View>
            <Text style={style.h1}>
                Todo
            </Text>
            <View style={style.inputConteiner}>
            <TextInput
                value={nom}
                onChangeText={setNom}
                placeholder='todo ...'
            />
            <Pressable style={style.button} onPress={() => handleSubmit()}>
                <Text>
                    Ajouter une todo
                </Text>
            </Pressable>
            </View>


            <View>
                <Text style={style.h2}>Todos :</Text>
                <View style={{ width: "100%" }}>
                    <FlatList
                        data={todo}
                        renderItem={renderItems}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    )
}
